interface INotification {
  _id: string;
  websiteId?: string; // If the notification is about a specific website.
  userId: string; // User to whom the notification belongs.
  content: string; // The actual notification content.
  type: "bug" | "article" | "solution"; // What kind of notification.
  relatedId: string; // ID of the related entity (could be faultId, articleId, etc.).
  createdDate: Date;
  isRead: boolean; // If the notification has been read or not.
}
