/* node-modules */
import React, { useEffect, useState } from "react";

/* firebase */
import { User } from "firebase/auth";
import { auth } from "../../firebase/auth";

/* types */
import { AuthContextType, AuthProviderProps } from "./types";
import { Nullable } from "../../global";

export const AuthContext = React.createContext<AuthContextType>({currentUser: null});

export const AuthProvider = ({children}: AuthProviderProps) => {
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