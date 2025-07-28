import Recipe from "../models/Recipe.js";
import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const createRecipe = async (req, res) => {
  const { ingredients } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "Eres un chef experto en recetas sencillas y saludables.",
        },
        {
          role: "user",
          content: `Dame una receta con estos ingredientes: ${ingredients.join(
            ", "
          )}`,
        },
      ],
    });

    const text = completion.choices[0].message.content;
    const [titleLine, ...steps] = text.split("\n").filter((l) => l.trim() !== "");

    const nuevaReceta = await Recipe.create({
      title: titleLine,
      ingredients,
      steps,
      estimatedTime: "45 min",
    });

    res.status(201).json(nuevaReceta);
  } catch (error) {
  console.error("🔴 Error detallado:", error.response?.data || error.message || error);
  res.status(500).json({ error: "Error generando receta" });
}
};

export const getRecipes = async (req, res) => {
  const recetas = await Recipe.find();
  res.json(recetas);
};

export const getRecipeById = async (req, res) => {
  const receta = await Recipe.findById(req.params.id);
  if (receta) {
    res.json(receta);
  } else {
    res.status(404).json({ error: "Receta no encontrada" });
  }
};