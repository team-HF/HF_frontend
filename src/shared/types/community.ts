export interface TReply {
  commentId: number;
  content: string;
  creationTime: string;
  postId: number;
  parentWriterName: string;
  writerId: number;
  writerName: string;
  writerProfileUrl: string;
  writerTier: { fitnessLevel: string; tier: number };
}

export interface TComment extends TReply {
  replies: TReply[];
}

export interface TPost {
  postId: number;
  postCategory: string;
  title: string;
  content: string;
  createDate: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  comments: TComment[];
  writerNickname: string;
  imagePath: string | null;
  writerId: number;
  writerTier: {
    fitnessLevel: string;
    tier: number;
  };
}

export interface TLike {
  likeId: number;
  memberId: number;
  commentId: number;
}
