
import { AuthContext } from "app/providers/auth-provider";
import { useContext } from "react"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;