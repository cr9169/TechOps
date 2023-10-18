export interface IArticle {
  _id: string;
  websiteId: string; // References IWebsite
  title: string;
  content: string;
  authorUserId: string; // References IUser
  status: Status;
  createdDate: Date;
  authorizedDate?: Date;
}

export type Status = "draft" | "pending review" | "authorized";
