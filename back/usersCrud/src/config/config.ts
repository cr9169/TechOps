import * as env from "env-var";
import dotenv from "dotenv";

dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  service: {
    port: parseInt(process.env.PORT || "4000", 10),
    jwt_secret: {
      secret: process.env.JWT_SECRET || "",
      expiration: parseInt(process.env.JWT_EXPIRATION || "3600", 10)
    }
  },
  mongo: {
    uri: env
      .get("MONGO_URI")
      .default("mongodb://localhost")
      .required()
      .asString(),
    usersCollectionName: env
      .get("USERS_COLLECTION_NAME")
      .default("users")
      .required()
      .asString()
  }
};

export default config;
