import { Application, Router } from "express";

import { RecipesRouter } from "./recipes";

const _routes: Array<[string, Router]> = [["/recipes", RecipesRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;

    app.use(url, router);
  });
};
