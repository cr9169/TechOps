import { z } from "zod";
import { zodMongoObjectId } from "../utils/zod";

const RoleSchema = z.enum(["admin", "technician", "manager"]);

const userSchema = z.object({
  username: z.string(),
  password: z.string(),
  role: RoleSchema,
  email: z.string().email(),
  articles: z.array(z.string()),
  createdDate: z.date(),
  lastLoginDate: z.date().optional(),
  isActive: z.boolean()
});

export const createUserSchema = z.object({
  body: userSchema,
  query: z.object({}),
  params: z.object({})
});

export const deleteUserSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId
  })
});

export const getUserByIdSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId
  })
});

export const getUserByUsernameSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId
  })
});

export const getAllUsersSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({})
});

export const getUsersCounterSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({})
});

export const updateUserSchema = z.object({
  body: userSchema.partial(),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId
  })
});

export const authenticateUserSchema = z.object({
  body: z.object({
    userName: z.string(),
    password: z.string()
  }),
  query: z.object({}),
  params: z.object({})
});
