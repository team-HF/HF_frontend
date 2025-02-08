import { create } from "zustand";

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
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
