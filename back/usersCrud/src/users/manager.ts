import { IUser } from "./interface";
import { comparePassword, hashPassword } from "../utils/passwordUtils";
import { UnauthorizedError } from "../utils/errors/unauthorizedError";
import { NotFoundError } from "../utils/errors/notFoundError";
import { UserModel } from "./model";

export class UsersManager {
  static async createUser(user: IUser): Promise<IUser> {
    const newUser = await UserModel.create(user);

    const hashedPassword = await hashPassword(user.password);

    const updatedUser = await UserModel.findByIdAndUpdate(
      newUser._id,
      { password: hashedPassword },
      { new: true }
    )
      .orFail(new NotFoundError("There is no such a user!"))
      .exec();

    return updatedUser;
  }

  static async deleteUser(userId: string): Promise<IUser | null> {
    return UserModel.findOneAndDelete({ _id: userId }, { new: true })
      .orFail(new NotFoundError("There is no such a user!"))
      .exec();
  }

  static async getUserById(userId: string): Promise<IUser | null> {
    return UserModel.findById(userId)
      .populate("articles")
      .orFail(new NotFoundError("There is no such a user!"))
      .exec();
  }

  static async getUserByUsername(username: string): Promise<IUser> {
    return UserModel.findOne({ username: username })
      .populate("articles")
      .orFail(new NotFoundError("There is no such a user!"))
      .exec();
  }

  static async getAllUsers(): Promise<IUser[]> {
    return UserModel.find().exec();
  }

  static async getUsersCounter(): Promise<number> {
    return UserModel.countDocuments().exec();
  }

  static async updateUser(
    userId: string,
    updatedUserDetails: Partial<IUser>
  ): Promise<IUser> {
    if (updatedUserDetails.password) {
      const hashedPassword = await hashPassword(updatedUserDetails.password);
      updatedUserDetails.password = hashedPassword;

      return UserModel.findByIdAndUpdate(userId, updatedUserDetails, {
        new: true
      })
        .orFail(new NotFoundError("There is no such a user!"))
        .exec();
    }

    return UserModel.findByIdAndUpdate(userId, updatedUserDetails, {
      new: true
    })
      .orFail(new NotFoundError("There is no such a user!"))
      .exec();
  }

  static async authenticateUser(
    username: string,
    password: string
  ): Promise<IUser | null> {
    const user = await UsersManager.getUserByUsername(username);

    if (!user) {
      return null;
    }

    const isPasswordCorrect = await comparePassword(password, user.password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedError("password is'nt correct!");
    }

    return user;
  }
}
