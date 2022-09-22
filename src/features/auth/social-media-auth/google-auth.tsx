import { useNavigate } from "react-router-dom";
import { googleProvider, signInWithPopup } from "shared/config/firebase";
import { auth } from "shared/config/firebase/auth";
import colors from "shared/libs/colors";
import SocialMediaButton from "shared/ui/buttons/social-media-button";
import Google from "shared/ui/icons/google";

const GoogleAuth = () => {
    const navigate = useNavigate();

    const authAction = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SocialMediaButton 
            icon={<Google/>} 
            onClick={authAction} 
            color={colors.red[800]}
            label="SignIn with Google"
        />
    );
}

export default GoogleAuth;