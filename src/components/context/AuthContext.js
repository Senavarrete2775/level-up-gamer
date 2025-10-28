import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem('currentUser');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch {
            return null;
        }
    });

    const getRegisteredUsers = () => {
        try {
            const users = localStorage.getItem('registeredUsers');
            return users ? JSON.parse(users) : [];
        } catch {
            return [];
        }
    };

    const saveRegisteredUsers = (users) => {
        localStorage.setItem('registeredUsers', JSON.stringify(users));
    };


    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);


    const register = (email, password) => {
        const users = getRegisteredUsers();
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            throw new Error('El correo ya está registrado.');
        }

        const newUser = { email, password };
        users.push(newUser);
        saveRegisteredUsers(users);

        setCurrentUser({ email });
        return newUser;
    };

    // Función de Login
    const login = (email, password) => {
        const users = getRegisteredUsers();
        const user = users.find(u => u.email === email && u.password === password); // ¡INSEGURO!
        if (!user) {
            throw new Error('Correo o contraseña incorrectos.');
        }
        setCurrentUser({ email });
        return { email };
    };


    const logout = () => {
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        register,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};