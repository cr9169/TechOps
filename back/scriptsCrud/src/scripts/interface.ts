export interface IScript {
  _id: string;
  purpose: string;
  programmingLanguage: string;
  content: string;
  authorUserId: string; // References IUser
  createdDate: Date;
  solvesProblemId?: string; // Optional, References IProblem
}
