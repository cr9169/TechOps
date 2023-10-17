interface ISolution {
  _id: string;
  faultId: string; // Connected to a specific Fault.
  steps: string[];
  authorUserId: string; // Who provided this solution.
  createdDate: Date;
  updatedDate?: Date; // When the solution was last updated.
}
