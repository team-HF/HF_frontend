import { create } from "zustand";
import {
  TCommunityNotification,
  TMatchNotification,
} from "../types/notification";

type TContent = {
  actor: string;
  memberId: number;
  targetId: number;
  type: TCommunityNotification | TMatchNotification;
};

export interface Notification {
  event: TContent;
  alarmMessage: string;
}

interface NotificationStore {
  notifications: Notification[];
  hasNewNotification: boolean;
  addNotification: (notification: Notification) => void;
  markAsRead: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  hasNewNotification: false,
  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
      hasNewNotification: true,
    })),
  markAsRead: () => set({ hasNewNotification: false }),
}));
