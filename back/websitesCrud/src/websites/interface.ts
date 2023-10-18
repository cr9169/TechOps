export interface IWebsite {
  _id: string;
  name: string;
  url: string;
  isActive: boolean;
  network: string;
  relatedArticles: string[]; // Array of IArticle IDs
  relatedProblems: string[]; // Array of IProblem IDs
}
