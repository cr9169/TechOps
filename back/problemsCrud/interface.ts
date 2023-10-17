interface IProblem {
  _id: string;
  websiteId: string;
  title: string;
  description: string;
  createdDate: Date;
  solution: ISolution;
}

interface ISolution {
  steps: IStep[];
}
interface IStep {
  title: string;
  content: string;
}
