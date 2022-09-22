import { useNavigate, useSearchParams } from "react-router-dom";

import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { UserGreating } from "widgets/user-greating";
import useAuth from "shared/libs/hooks/useAuth";
import { auth } from "shared/config/firebase/auth";
import Login from "features/auth/login";
import Registration from "features/auth/registration";

const Home = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const action = searchParams.get('action');

    const toLoginPage = () => navigate('?action=login');
    const toRegistrationPage = () => navigate('?action=registration');

    const signOut = () => auth.signOut();

    return (
        <Paper elevation={4} sx={{
            p: 4, display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}
        >
            <UserGreating/>
            {
                currentUser
                    ? <Button
                        variant="contained"
                        onClick={signOut}
                        fullWidth
                    >
                        Sign out
                    </Button>
                    :
                    <Stack spacing={1}>
                        <Button variant="contained" onClick={toRegistrationPage}>Registration</Button>
                        <Button variant="contained" onClick={toLoginPage}>Login</Button>
                    </Stack>

            }
            {action == "login" && <Login/>}
            {action == "registration" && <Registration/>}
        </Paper>
    );
}

export default Home;