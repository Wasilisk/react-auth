import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "shared/config/firebase";
import { auth } from "shared/config/firebase/auth";
import CustomDivider from "shared/ui/divider";
import AuthForm from "shared/ui/form/auth-form";
import Stack from "shared/ui/stack";
import AuthPopup from "../auth-popup";
import { authSchema } from "../schema/authSchema";
import FacebookAuth from "../social-media-auth/facebook-auth";
import TwitterAuth from "../social-media-auth/twitter-auth";
import GoogleAuth from "../social-media-auth/google-auth";
import { AuthValues } from "../types";
import AuthRedirect from "../auth-redirect";

const Registration = () => {
    const navigate = useNavigate();

    const onSubmit = async (values: AuthValues) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const onSuccess = () => navigate("/");

    return (
        <AuthPopup>
            <AuthForm
                validationSchema={authSchema}
                onSubmit={onSubmit}
                onSuccess={onSuccess}
                buttonLabel="SignIn"
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
export default Registration;