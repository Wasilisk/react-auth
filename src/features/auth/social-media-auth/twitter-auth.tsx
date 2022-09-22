import { useNavigate } from "react-router-dom";
import { googleProvider, signInWithPopup } from "shared/config/firebase";
import { auth } from "shared/config/firebase/auth";
import colors from "shared/libs/colors";
import SocialMediaButton from "shared/ui/buttons/social-media-button";
import Twitter from "shared/ui/icons/twitter";

const TwitterAuth = () => {
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
            icon={<Twitter/>} 
            onClick={authAction} 
            color={colors.blue[300]}
            label="SignIn with Twitter"
        />
    );
}

export default TwitterAuth;