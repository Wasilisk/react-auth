/* node-modules */
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

/* mui */
import { Box, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Stack } from '@mui/system';

/* firebase */
import { auth } from '../../../firebase/auth';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';

/* components */
import { TextInput, PasswordInput } from '../../common/inputs';

/* validations */
import { authValidation } from '../../../validation/authValidation';

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: authValidation,
    onSubmit: async (values) => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password)
        navigate('/')
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          toast.error("Invalid credentials");
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextInput
          fullWidth
          id="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          errorMessage={formik.errors.email}
        />
        <PasswordInput
          fullWidth
          id="password"
          name="password"
          placeholder='Passsword'
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          errorMessage={formik.errors.password}
        />

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </FormGroup>
          <Button color="primary" variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </Stack>
    </form>
  );
}

export default LoginForm;