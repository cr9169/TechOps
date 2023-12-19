import mongoose, { Schema } from "mongoose";
import { IUser } from "./interface";

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  role: {
    type: String,
    required: true,
    enum: ["admin", "technician", "manager"]
  },
  email: { type: String, required: true, unique: true },
  articles: [{ type: String, ref: "Article" }],
  createdDate: { type: Date, default: Date.now },
  lastLoginDate: { type: Date },
  isActive: { type: Boolean, default: true }
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
