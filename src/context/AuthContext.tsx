'use client'

import {User} from "@/types";
import {createContext, useEffect, useContext, useState} from "react";

type AuthContextType = {
    user: User | null;
    login: (user: User, token: string) => void;
    logout: () => void;
    loading: boolean,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
    loading: true,
    setUser: () => {},
} );

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (user: User, token: string) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
    }
        
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{user, login, logout, loading, setUser}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);