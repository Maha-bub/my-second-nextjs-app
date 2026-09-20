import React, { Children, createContext } from 'react';

export const UserContext = createContext(null)


const UserProvider = ({ Children }) => {
    return (
        <UserContext.Provide value={{ name: 'Mahabub', age: 23 }}>
            {Children}
        </UserContext.Provide>
    );
};

export default ContexProvider;