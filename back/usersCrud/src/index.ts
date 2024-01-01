import mongoose from "mongoose";
import config from "./config/config";
import { logger } from "./utils/logger";
import { Server } from "./server";

const { mongo, service } = config;

const initializeMongo = async () => {
  logger.info("Connecting to Mongo...");

  await mongoose.connect(mongo.uri);

  logger.info("Mongo connection established");
};

const main = async () => {
  await initializeMongo();

  const server = new Server(service.port);

  await server.start();

  logger.info(`Server started on port: ${service.port}`);
};

main().catch(logger.error);
