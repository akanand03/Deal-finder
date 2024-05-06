// src/context/NotificationContext.js
import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = notification => {
        setNotifications(prevNotifications => [...prevNotifications, notification]);
    };

    const removeNotification = notificationId => {
        setNotifications(prevNotifications => prevNotifications.filter(n => n.id !== notificationId));
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => useContext(NotificationContext);
