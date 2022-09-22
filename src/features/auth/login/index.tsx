import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "shared/config/firebase";
import { auth } from "shared/config/firebase/auth";
import CustomDivider from "shared/ui/divider";
import AuthForm from "shared/ui/form/auth-form";
import Stack from "shared/ui/stack";
import AuthPopup from "../auth-popup";
import AuthRedirect from "../auth-redirect";
import { authSchema } from "../schema/authSchema";
import FacebookAuth from "../social-media-auth/facebook-auth";
import GoogleAuth from "../social-media-auth/google-auth";
import TwitterAuth from "../social-media-auth/twitter-auth";
import { AuthValues } from "../types";

const Login = () => {
    const navigate = useNavigate();

    const onSubmit = async (values: AuthValues) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const onSuccess = () => navigate("/");

    return (
        <AuthPopup>
            <AuthForm
                validationSchema={authSchema}
                onSubmit={onSubmit}
                onSuccess={onSuccess}
                buttonLabel="Login"
            />
            <AuthRedirect/>
            <CustomDivider>or</CustomDivider>
            <Stack spacing={1}>
                <GoogleAuth/>
                <FacebookAuth/>
                <TwitterAuth/>
            </Stack>
        </AuthPopup>
    );
}
export default Login;