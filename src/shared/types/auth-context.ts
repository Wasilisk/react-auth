import { Nullable } from "app/types";
import User from "./user";

type AuthContextType = {currentUser: Nullable<User>};

export default AuthContextType;