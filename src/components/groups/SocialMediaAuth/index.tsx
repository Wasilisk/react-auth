/* node-modules */
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

/* mui */
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import Stack from '@mui/material/Stack';
import { blue, red } from '@mui/material/colors';

/* firebase */
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase/auth';
import { provider } from '../../../firebase/googleProvider';

/* coponents */
import SocialMediaButton from '../../common/SocialMediaButton';

/* types */
import { SocialMediaAuthProps } from './types';

const SocialMediaAuth = ({authAction}: SocialMediaAuthProps) => {
    const navigate = useNavigate();
    
    const googleAuth = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate('/');
            toast.success("Welcome !");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Stack spacing={2}>
            <SocialMediaButton icon={<FacebookIcon />} authAction={authAction} socialMediaName="Facebook" color={blue[800]} onClick={googleAuth} />
            <SocialMediaButton icon={<TwitterIcon />} authAction={authAction} socialMediaName="Twitter" color={blue[300]} onClick={googleAuth} />
            <SocialMediaButton icon={<GoogleIcon />} authAction={authAction} socialMediaName="Google" color={red[800]} onClick={googleAuth} />
        </Stack>
    );
}

export default SocialMediaAuth;