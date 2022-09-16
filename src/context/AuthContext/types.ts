/* node-modules */
import { ReactNode } from "react";

/* types */
import { User } from "firebase/auth";
import { Nullable } from "../../global";

export type AuthContextType = {currentUser: Nullable<User>};

export type AuthProviderProps = {
    children: ReactNode
}