import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeDTO } from "../models/recipe";

const recipeBusiness = new RecipeBusiness();

export class RecipeController {
  async createRecipe(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const { title, description } = req.body;

      const newRecipe: RecipeDTO = {
        title,
        description,
      };

      await recipeBusiness.createRecipe(newRecipe, token);
      res.status(200).send({ data: "Receita criada!!!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async getRecipeById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const { id } = req.params;

      const result = await recipeBusiness.getRecipeById(id, token);

      res.status(200).send({ data: result });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
