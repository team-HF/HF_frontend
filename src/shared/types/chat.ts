export type Message = {
  senderId: string;
  message: string;
  timestamp: Date;
};

export type ChatMessageProps = {
  message: Message;
  currentUserId: string;
};
