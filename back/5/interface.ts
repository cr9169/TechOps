interface Article {
    _id: string;
    websiteId: string; // Which website the article is about.
    title: string;
    content: string; // The actual content of the article.
    authorUserId: string; // Who wrote the article.
    status: 'draft' | 'pending review' | 'authorized'; // Status of the article.
    createdDate: Date;
    authorizedDate?: Date; // When the article was authorized/approved.
  }
  