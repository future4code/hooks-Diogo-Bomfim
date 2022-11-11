import { Recipe } from "../models/recipe";
import BaseDatabase from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  public async createRecipe(recipe: Recipe) {
    await BaseDatabase.connection("Cookenu_recipes").insert({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
    });
  }

  public async getRecipeById(id: string) {
    const result = await BaseDatabase.connection("Cookenu_recipes")
    .select()
    .where({ id })

    return result[0]
  }
}
