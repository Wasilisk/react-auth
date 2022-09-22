import { Nullable } from "app/types"
import { createContext, ReactNode, useEffect, useState } from "react";
import User from "shared/types/user";
import AuthContextType from "shared/types/auth-context";
import { auth } from "shared/config/firebase";

export const AuthContext = createContext<AuthContextType>({currentUser: null});

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [currentUser, setCurrentUser] = useState<Nullable<User>>(null);
    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser);
    }, [])

    return (
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    );
}