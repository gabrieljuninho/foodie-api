import express, { Application } from "express";
import dotenv from "dotenv";

import { routes } from "./routes";

import { logger } from "./utils/logger";

dotenv.config();

const app: Application = express();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: Number = Number(process.env.PORT);

routes(app);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
