import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);

    const signin = (data) => {
        setAuthData(data); // Set your authentication data here
    };

    const signout = () => {
        setAuthData(null); // Clear your authentication data
    };

    return (
        <AuthContext.Provider value={{ authData, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
