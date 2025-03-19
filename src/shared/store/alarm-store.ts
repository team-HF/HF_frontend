import { create } from "zustand";
import {
  TCommunityNotification,
  TMatchNotification,
} from "../types/notification";
import { persist } from "zustand/middleware";

export interface Notification {
  message: string;
  type: TCommunityNotification | TMatchNotification;
  time: string;
  targetId: number;
}

interface NotificationStore {
  hasNewNotification: boolean;
  addNewNotification: () => void;
  markAsRead: () => void;
}
export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set) => ({
      hasNewNotification: false,
      addNewNotification: () => set({ hasNewNotification: true }),
      markAsRead: () => set({ hasNewNotification: false }),
    }),
    {
      name: "notification-storage",
      getStorage: () => localStorage,
    }
  )
);
