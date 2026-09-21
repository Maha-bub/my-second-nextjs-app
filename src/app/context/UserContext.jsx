'use client';
import React, { Children, createContext } from 'react';

export const UserContext = createContext(null);


const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value='Mahabub'>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;