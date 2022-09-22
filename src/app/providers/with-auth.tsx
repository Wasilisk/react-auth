import { AuthProvider } from "./auth-provider";

export const WithAuth = (component: () => React.ReactNode) => {
    return (
        <AuthProvider>
            {component()}
        </AuthProvider>
    );
}