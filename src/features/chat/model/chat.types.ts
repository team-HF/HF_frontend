export interface ChatRequestPayload {
  requesterId: number;
  chatTargetId: number;
}

export interface ChatRoom {
  id: number;
}

export interface ChatMessage {
  chatRoomId: number;
  senderId: number;
  content: string;
}
