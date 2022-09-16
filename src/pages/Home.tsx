/* node-modules */
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

/* mui */
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

/* firebase */
import { auth } from "../firebase/auth";

/* context */
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const catGifs = {
        guest: "https://appstickers-cdn.appadvice.com/1444979733/829458602/1f55fb0bd4a492ac4d3c7ec1de8ac1ec-3.gif",
        autorized: "https://appstickers-cdn.appadvice.com/1444979733/829458602/3e7fa6713db2d7c085dc02e5f19784fe-6.gif"
    }

    const toLoginPage = () => navigate('/login');
    const toRegistrationPage = () => navigate('/registration');

    const signOut = () => auth.signOut();

    return (
        <Paper elevation={4} sx={{
            p: 4, display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}
        >
            <img
                height="240px"
                width="240px"
                src={currentUser ? catGifs.autorized : catGifs.guest}
                alt="Cat"
            />
            <Typography
                variant="h6"
                textAlign="center"
                sx={{ my: 2 }}
            >
                Hello {currentUser ? currentUser.email : "Guest"}
            </Typography>
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
            <Outlet />
        </Paper>
    );
}

export default Home;