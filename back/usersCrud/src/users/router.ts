import express from "express";
import { UsersController } from "./controller";
import { validateRequest } from "../utils/express/wrappers"; // This is a hypothetical middleware for validating with zodSchemas
import * as zodSchemas from "./validation";

const usersRouter = express.Router();

// POST /users to create a new user
usersRouter.post(
  "/users",
  validateRequest(zodSchemas.createUserSchema),
  UsersController.createUser
);

// DELETE /users/:id to delete a user by ID
usersRouter.delete(
  "/users/:id",
  validateRequest(zodSchemas.deleteUserSchema),
  UsersController.deleteUser
);

// GET /users/:id to get a user by ID
usersRouter.get(
  "/users/:id",
  validateRequest(zodSchemas.getUserByIdSchema),
  UsersController.getUserById
);

// GET /users/username/:username to get a user by username
usersRouter.get(
  "/users/username/:username",
  validateRequest(zodSchemas.getUserByUsernameSchema),
  UsersController.getUserByUsername
);

// GET /users to get all users
usersRouter.get(
  "/users",
  validateRequest(zodSchemas.getAllUsersSchema),
  UsersController.getAllUsers
);

// GET /users/count to get the number of users
usersRouter.get(
  "/users/count",
  validateRequest(zodSchemas.getUsersCounterSchema),
  UsersController.getUsersCounter
);

// PUT /users/:id to update a user by ID
usersRouter.put(
  "/users/:id",
  validateRequest(zodSchemas.updateUserSchema),
  UsersController.updateUser
);

// POST /users/authenticate to authenticate a user
usersRouter.post(
  "/users/authenticate",
  validateRequest(zodSchemas.authenticateUserSchema),
  UsersController.authenticateUser
);

export default usersRouter;
