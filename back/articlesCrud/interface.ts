interface IArticle {
  _id: string;
  websiteId: string;
  title: string;
  content: string;
  authorUserId: string;
  status: Status;
  createdDate: Date;
  authorizedDate?: Date; // The date the admin has submitted the request - optional because the article can be in "draft" | "pending review" stage.
}

type Status = "draft" | "pending review" | "authorized";
