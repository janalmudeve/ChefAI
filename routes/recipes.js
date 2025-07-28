import express from "express";
import {
  createRecipe,
  getRecipes,
  getRecipeById
} from "../controllers/recipesController.js";

const router = express.Router();

router.post("/", createRecipe);
router.get("/", getRecipes);
router.get("/:id", getRecipeById);

export default router;