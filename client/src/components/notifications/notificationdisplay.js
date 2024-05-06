// src/components/NotificationDisplay.js

import React from "react";
import { useNotifications } from "../../context/AuthContext"; // Adjust the import path as necessary

const NotificationDisplay = () => {
  const { notifications } = useNotifications();

  if (notifications.length === 0) {
    return <div>No notifications</div>;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "white",
        padding: 10,
      }}
    >
      {notifications.map((notification, index) => (
        <div key={index}>
          {notification.message}{" "}
          {/* Assuming notifications have a message field */}
        </div>
      ))}
    </div>
  );
};

export default NotificationDisplay;
