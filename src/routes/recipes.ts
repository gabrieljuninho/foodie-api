import { Request, Response, Router } from "express";

export const RecipesRouter: Router = Router();

RecipesRouter.get("/random", (req: Request, res: Response) => {
  res.json({ message: "Ini random" });
});
