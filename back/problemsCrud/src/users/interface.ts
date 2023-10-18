export interface IProblem {
  _id: string;
  websiteId: string; // References IWebsite
  title: string;
  description: string;
  createdDate: Date;
  solution: ISolution;
  relatedScripts: string[]; // Array of IScript IDs
}

export interface ISolution {
  steps: IStep[];
}

export interface IStep {
  title: string;
  content: string;
}
