import { IUser } from "./interface";
import { comparePassword } from "../utils/passwordUtils";
import { UnauthorizedError } from "../utils/errors/unauthorizedError";
import { NotFoundError } from "../utils/errors/notFoundError";
import { UserModel } from "./model";

export const createUser = async (user: IUser): Promise<IUser> => {
  return UserModel.create(user);
};

export const deleteUser = async (userId: string): Promise<IUser | null> => {
  return UserModel.findOneAndDelete({ _id: userId }, { new: true })
    .orFail(new NotFoundError("There is no such a user!"))
    .exec();
};

export const getUserById = async (userId: string): Promise<IUser | null> => {
  // Implement database call here
  return UserModel.findById(userId)
    .orFail(new NotFoundError("There is no such a user!"))
    .exec();
};

export const getUserByUsername = async (username: string): Promise<IUser> => {
  // Implement database call here
  return UserModel.findOne({ username: username })
    .orFail(new NotFoundError("There is no such a user!"))
    .exec();
};

export const getAllUsers = async (): Promise<IUser[]> => {
  return UserModel.find().exec();
};

export const getUsersCounter = async (): Promise<number> => {
  return UserModel.countDocuments().exec();
};

export const updateUser = async (
  userId: string,
  updatedUserDetails: Partial<IUser>
): Promise<IUser> => {
  return UserModel.findByIdAndUpdate(userId, updatedUserDetails, {
    new: true
  })
    .orFail(new NotFoundError("There is no such a user!"))
    .exec();
};

export const authenticateUser = async (
  username: string,
  password: string
): Promise<IUser | null> => {
  const user = await getUserByUsername(username);

  if (!user) {
    return null;
  }

  const isPasswordCorrect = await comparePassword(password, user.password);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError("password is'nt correct!");
  }

  return user;
};
