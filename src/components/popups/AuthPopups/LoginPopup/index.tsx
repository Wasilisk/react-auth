/* node-modules */
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom'

/* mui */
import { Box, Link, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

/* components */
import AuthPopup from '../AuthPopup';
import LoginForm from '../../../forms/LoginForm';
import SocialMediaAuth from '../../../groups/SocialMediaAuth';
import CustomDivider from '../../../common/CustomDivider';

/* context */
import { AuthContext } from '../../../../context/AuthContext';

const LoginPopup = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" replace />
  }

  return (
    <AuthPopup>
      <LoginForm />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: 2
      }}
      >
        <Link
          underline='none'
          component={RouterLink}
          to="/registration"
        >
          Register now
        </Link>
        <Typography
          color={grey[500]}
        >
          Forgot password ?
        </Typography>
      </Box>
      <CustomDivider>or</CustomDivider>
      <SocialMediaAuth authAction="sign-in" />
    </AuthPopup>
  );
};

export default LoginPopup;