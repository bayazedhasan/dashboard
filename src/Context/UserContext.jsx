import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        fullName: 'Jane D.',
        email: 'jane@gmail.com',
        storeName: 'Ubreakfix Store',
        storeAddress: '123 Main Street, New York, NY 10001',
        profileImage: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    });

    const updateUser = (updatedData) => {
        setUser((prev) => ({ ...prev, ...updatedData }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
