import moment from "moment";
import { RecipeDatabase } from "../data/RecipeDatabase";
import {
  CustomError,
  InvalidAuthenticatorData,
  InvalidInfos,
  InvalidToken,
} from "../error/CustomError";
import { Recipe, RecipeDTO } from "../models/recipe";
import { generateId } from "../services/generateId";
import { TokenGenerator } from "../services/TokenGenerator";

const tokenGenerator = new TokenGenerator();
const recipeDatabase = new RecipeDatabase();

export class RecipeBusiness {
  async createRecipe(recipe: RecipeDTO, token: string) {
    try {
      if (!token) {
        throw new InvalidToken();
      }

      const authenticationData = tokenGenerator.getData(token);

      if (!authenticationData.id) {
        throw new InvalidAuthenticatorData();
      }

      if (!recipe.title || !recipe.description) {
        throw new InvalidInfos();
      }

      const id = generateId();

      const newRecipe: Recipe = {
        id,
        title: recipe.title,
        description: recipe.description,
      };

      await recipeDatabase.createRecipe(newRecipe);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  async getRecipeById(id: string, token: string) {
    try {
      if (!token) {
        throw new InvalidToken();
      }

      const authenticationData = tokenGenerator.getData(token);

      if (!authenticationData.id) {
        throw new InvalidAuthenticatorData();
      }

      const result = await recipeDatabase.getRecipeById(id);

      result.date = moment(result.date).format("DD/MM/YYYY")
      
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
