interface IUser {
  _id: string;
  username: string;
  password: string;
  role: Role;
  email: string;
  articles: IArticle[];
  createdDate: Date;
  lastLoginDate?: Date; // Optional because the user might have not logged in already.
  isActive: boolean;
}

type Role = "admin" | "technician" | "manager";