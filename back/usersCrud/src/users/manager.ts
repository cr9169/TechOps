import { IUser } from "./interface";
import { comparePassword } from "../utils/passwordUtils";

// TODO: implement the actual function!!!
// Mock of a function to retrieve user data from a database
const getUserByUsername = async (username: string): Promise<IUser | null> => {
  // Implement database call here
  const x = username;
  return Promise.resolve(null);
};

export const authenticateUser = async (
  username: string,
  password: string
): Promise<IUser | null> => {
  const user = await getUserByUsername(username);

  if (!user) {
    return null; // User not found
  }

  const isPasswordCorrect = await comparePassword(password, user.password);

  if (!isPasswordCorrect) {
    return null; // Incorrect password
  }

  return user; // Authentication successful
};
