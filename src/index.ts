import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import { routes } from "./routes";

import { logger } from "./utils/logger";

dotenv.config();

const app: Application = express();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: Number = Number(process.env.PORT);

// Body parse middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS access control
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

routes(app);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
