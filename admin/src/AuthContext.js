// admin/AuthContext.js
// admin/AuthContext.js
// admin/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check local storage for authentication state on load
    // admin/AuthContext.js
    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        console.log('Stored Auth:', storedAuth);
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
            console.log('User is authenticated');
        } else {
            console.log('User is not authenticated');
        }
    }, []);


    const login = () => {
        console.log('Logging in');
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const logout = () => {
        console.log('Logging out');
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };


    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};




//***
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => {
//     return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [role, setRole] = useState('');

//     const login = (userRole) => {
//         setIsAuthenticated(true);
//         setRole(userRole); // Set the user role
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//         setRole(''); // Reset the user role
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
