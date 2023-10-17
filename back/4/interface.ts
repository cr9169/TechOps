interface IScript {
  _id: string;
  title: string;
  content: string; // The actual script content.
  description: string;
  authorUserId: string; // Who wrote/added the script.
  createdDate: Date;
}
