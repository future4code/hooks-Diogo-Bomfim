import express from "express";
import { RecipeController } from "../controller/RecipeController";

export const recipeRouter = express.Router();
const recipeController = new RecipeController();

// Path para criar uma receita
recipeRouter.post("", recipeController.createRecipe)

// Path para pegar uma receita
recipeRouter.get("/:id", recipeController.getRecipeById)

