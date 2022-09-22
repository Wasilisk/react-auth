import { useNavigate } from "react-router-dom";
import { googleProvider, signInWithPopup } from "shared/config/firebase";
import { auth } from "shared/config/firebase/auth";
import colors from "shared/libs/colors";
import SocialMediaButton from "shared/ui/buttons/social-media-button";
import Facebook from "shared/ui/icons/facebook";

const FacebookAuth = () => {
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
            icon={<Facebook/>} 
            onClick={authAction} 
            color={colors.blue[800]}
            label="SignIn with Facebook"
        />
    );
}

export default FacebookAuth;