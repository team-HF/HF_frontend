export interface ChatContent {
  chatroomId: number;
  opponentParticipantId: number;
  opponentParticipantNickname: string;
  opponentParticipantProfileImageUrl: string;
  matchingStatus: MatchingStatus;
  lastChatMessage: string;
  chatSentTime: string;
  unreadMessageCount: number;
}

export enum MatchingStatus {
  ALL = 'ALL',
  MATCHING_IN_PROGRESS = 'MATCHING_IN_PROGRESS',
  MATCHING_TERMINATED = 'MATCHING_TERMINATED',
}
