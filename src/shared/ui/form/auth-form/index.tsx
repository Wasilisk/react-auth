import { useFormik } from 'formik';
import { FirebaseError } from 'shared/config/firebase';
import Box from 'shared/ui/box';
import Button from 'shared/ui/buttons/button';
import Checkbox from 'shared/ui/checkbox';
import { PasswordInput } from 'shared/ui/inputs/password-input';
import { TextInput } from 'shared/ui/inputs/text-input';
import Stack from 'shared/ui/stack';
import FormControlLabel from '../form-control-label';
import FormGroup from '../form-group';
import { AuthFormProps } from './types';

const AuthForm = ({validationSchema, buttonLabel, onSubmit, onSuccess}: AuthFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        try {
            await onSubmit(values);
            onSuccess();
        } catch (error) {
            if(error instanceof FirebaseError) {
                console.log(error.code)
                if(error.code == "auth/email-already-in-use") {
                    formik.errors.email="Email already exists"
                }
                if(error.code == "auth/wrong-password") {
                    formik.errors.password="Wrong password"
                }
                if(error.code == "auth/user-not-found") {
                    formik.errors.email="User not found"
                }
            }
        }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextInput
          fullWidth
          id="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          errorMessage={formik.errors.email}
        />
        <PasswordInput
          fullWidth
          id="password"
          placeholder='Passsword'
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          errorMessage={formik.errors.password}
        />

        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </FormGroup>
          <Button color="primary" variant="contained" type="submit">
            {buttonLabel}
          </Button>
        </Box>
      </Stack>
    </form>
  );
}

export default AuthForm;