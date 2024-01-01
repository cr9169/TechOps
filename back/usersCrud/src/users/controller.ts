import { UsersManager } from "./manager";
import * as zodSchemas from "./validation";
import { TypedRequest } from "../utils/zod";
import { IUser } from "./interface";

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
    res.json(await UsersManager.deleteUser(req.params.id));
  }

  static async getUserById(
    req: TypedRequest<typeof zodSchemas.getUserByIdSchema>,
    res: Response
  ) {
    res.json(await UsersManager.getUserById(req.params.id));
  }

  static async getUserByUsername(
    req: TypedRequest<typeof zodSchemas.getUserByUsernameSchema>,
    res: Response
  ) {
    res.json(await UsersManager.getUserByUsername(req.params.username));
  }
  static async getAllUsers(
    req: TypedRequest<typeof zodSchemas.getAllUsersSchema>,
    res: Response
  ) {
    res.json(await UsersManager.getAllUsers());
  }

  static async getUsersCounter(
    req: TypedRequest<typeof zodSchemas.getUsersCounterSchema>,
    res: Response
  ) {
    res.json(await UsersManager.getUsersCounter());
  }

  static async updateUser(
    req: TypedRequest<typeof zodSchemas.updateUserSchema>,
    res: Response
  ) {
    res.json(await UsersManager.updateUser(req.params.id, req.body));
  }

  static async authenticateUser(
    req: TypedRequest<typeof zodSchemas.authenticateUserSchema>,
    res: Response
  ) {
    res.json(
      await UsersManager.authenticateUser(req.body.username, req.body.password)
    );
  }
}
