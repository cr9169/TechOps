import { UsersManager } from "./manager";
import * as zodSchemas from "./validation";
import { TypedRequest } from "../utils/zod";

export class UsersController {
  static async createUser(
    req: TypedRequest<typeof zodSchemas.createUserSchema>,
    res: Response
  ) {
    res.json(await UsersManager.createUser(req.body));
  }

  static async deleteUser(
    req: TypedRequest<typeof zodSchemas.deleteUserSchema>,
    res: Response
  ) {
    res.json(await usersManager.deleteUser(req.params.id));
  }

  static async getUserById(
    req: TypedRequest<typeof zodSchemas.getUserByIdSchema>,
    res: Response
  ) {
    res.json(await usersManager.getUserById(req.params.id));
  }

  static async getUserByUsername(
    req: TypedRequest<typeof zodSchemas.getUserByUsernameSchema>,
    res: Response
  ) {
    res.json(await usersManager.getUserByUsername(req.params.username));
  }
  static async getAllUsers(
    req: TypedRequest<typeof zodSchemas.getAllUsersSchema>,
    res: Response
  ) {
    res.json(await usersManager.getAllUsers());
  }

  static async getUsersCounter(
    req: TypedRequest<typeof zodSchemas.getUsersCounterSchema>,
    res: Response
  ) {
    res.json(await usersManager.getUsersCounter());
  }

  static async updateUser(
    req: TypedRequest<typeof zodSchemas.updateUserSchema>,
    res: Response
  ) {
    res.json(await usersManager.updateUser(req.params.id, req.body));
  }

  static async authenticateUser(
    req: TypedRequest<typeof zodSchemas.authenticateUserSchema>,
    res: Response
  ) {
    res.json(await usersManager.authenticateUser(req.body));
  }
}
