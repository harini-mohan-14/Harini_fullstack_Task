import { createContext, useContext, useState } from "react";
import notificationsData from "../data/notifications";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState(
    notificationsData
  );

  const addNotification = (notification) => {
    setNotifications((previousNotifications) => [
      ...previousNotifications,
      {
        id: Date.now(),
        ...notification
      }
    ]);
  };

  const removeNotification = (id) => {
    setNotifications((previousNotifications) =>
      previousNotifications.filter(
        (notification) => notification.id !== id
      )
    );
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationContext);
}