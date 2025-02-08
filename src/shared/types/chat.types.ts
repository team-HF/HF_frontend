export interface ChatRequestPayload {
  requesterId: number;
  chatTargetId: number;
}

export interface ChatRoom {
  id: number;
}

export interface Content {
  isFirst: boolean;
  isLast: boolean;
  page: number;
  pageSize: number;
  chatMessages: ChatMessage[];
}

export interface ChatMessage {
  chatMessageId: number;
  senderId: number;
  creationTime: string;
  lastModified: string;
  chatMessageType: 'TEXT' | 'IMAGE' | string;
  content: ChatMessageContent;
  read: boolean;
}

interface ChatMessageContent {
  text: string;
}
