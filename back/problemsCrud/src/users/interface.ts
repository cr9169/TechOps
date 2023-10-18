export interface IProblem {
  _id: string;
  websiteId: string;
  title: string;
  description: string;
  createdDate: Date;
  solution: ISolution;
}

export interface ISolution {
  steps: IStep[];
}
export interface IStep {
  title: string;
  content: string;
}
