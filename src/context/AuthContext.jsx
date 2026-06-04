import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("authenticatedUser");
        if (savedUser) setUser(JSON.parse(savedUser));
    }, []);

    const login = (email) => {
        const mockUser = { email, token: "jwt-mock-token-xyz" };
        setUser(mockUser);
        localStorage.setItem("authenticatedUser", JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("authenticatedUser");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}