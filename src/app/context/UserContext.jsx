'use client';
import React, { Children, createContext } from 'react';

export const UserContext = createContext(null);


const UserProvider = ({ Children }) => {
    return (
        <UserContext.Provider value='Mahabub'>
            {Children}
        </UserContext.Provider>
    );
};

export default UserProvider;