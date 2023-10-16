interface Fault {
    _id: string;
    websiteId: string; // Connected to a specific Website.
    title: string;
    description: string;
    status: 'resolved' | 'unresolved' | 'in-progress'; // Status of the fault.
    createdDate: Date; // When the fault was reported.
    solutionId?: string; // Connected to a specific Solution (optional until a solution is provided).
  }
  