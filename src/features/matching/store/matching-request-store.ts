import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface MatchingRequestContent {
  matchingTargetId: number;
  meetingTime: string;
  meetingPlace: string;
  meetingPlaceAddress: string;
}

interface RequestMessagePayloadStore {
  messageContent: MatchingRequestContent | null;
  setMessageContent: (content: MatchingRequestContent) => void;
  resetMessageContent: () => void;
}

export const useRequestMessagePayloadStore = create(
  persist<RequestMessagePayloadStore>(
    (set) => ({
      messageContent: null,
      setMessageContent: (content) => set({ messageContent: content }),
      resetMessageContent: () => set({ messageContent: null }),
    }),
    {
      name: 'matching-request-content-store',
      getStorage: () => sessionStorage,
    }
  )
);
