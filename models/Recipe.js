import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  steps: [String],
  estimatedTime: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Recipe", recipeSchema);