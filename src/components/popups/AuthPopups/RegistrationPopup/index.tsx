/* node-modules */
import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom'

/* mui */
import { Box, Link, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

/* components */
import AuthPopup from '../AuthPopup';
import RegistrationForm from '../../../forms/RegistrationForm';
import SocialMediaAuth from '../../../groups/SocialMediaAuth';
import CustomDivider from '../../../common/CustomDivider';

/* context */
import { AuthContext } from '../../../../context/AuthContext';

const RegistrationPopup = () => {
  return (
    <AuthPopup>
      <RegistrationForm />
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
        to="/login"
        >
          Already registered ?
        </Link>
        <Typography 
        color={grey[500]}
        >
          Forgot password ?
          </Typography>
      </Box>
      <CustomDivider>or</CustomDivider>
      <SocialMediaAuth authAction="sign-up" />
    </AuthPopup>
  );
};

export default RegistrationPopup;