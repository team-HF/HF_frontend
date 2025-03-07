export const COMMUNITY_MAP = {
  ADD_COMMENT_TO_COMMENT: "커뮤니티 댓글 작성",
  ADD_COMMENT_TO_POST: "커뮤니티 댓글 작성",
  ADD_LIKE_TO_COMMENT: "커뮤니티 댓글 좋아요",
  ADD_LIKE_TO_POST: "커뮤니티 글 좋아요",
  POPULAR_POST: "커뮤니티 인기글",
} as const;

export const MATCH_MAP = {
  MATCH_REQUEST: "매칭 신청",
  MATCH_ACCEPT: "매칭 수락",
  MATCH_REJECT: "매칭 거절",
  MATCH_PUNK: "매칭 중단",
  MATCH_END_REVIEW: "후기 작성",
} as const;

export type TCommunityNotification = keyof typeof COMMUNITY_MAP;
export type TMatchNotification = keyof typeof MATCH_MAP;

export const getCommunityNotificationText = (level: TCommunityNotification) =>
  COMMUNITY_MAP[level];
export const getMatchNotificationText = (level: TMatchNotification) =>
  MATCH_MAP[level];
