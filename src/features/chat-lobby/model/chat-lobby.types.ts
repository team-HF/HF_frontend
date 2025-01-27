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
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}
