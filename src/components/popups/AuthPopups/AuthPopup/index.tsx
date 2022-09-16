/* node-modules */
import { useNavigate } from "react-router-dom";

/* mui */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import CloseIcon from '@mui/icons-material/Close';
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

/* components */
import OverlayingPopup from "../../OverlayingPopup";

/* types */
import { AuthPopupProps } from "./types";

const AuthPopup = ({ children }: AuthPopupProps) => {
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:600px)');

    const toHomePage = () => navigate('/');

    return (
        <OverlayingPopup>
            <Container sx={{ pl: 0, pr: 0 }}>
                <Paper
                    elevation={5}
                    sx={{
                        zIndex: 2,
                        position: 'relative',
                        height: matches ? 'auto' : "100vh"
                    }}>
                    <IconButton sx={{ 
                        position: 'absolute', 
                        top: 4, 
                        left: 4 
                        }} 
                        onClick={toHomePage}>
                        <CloseIcon />
                    </IconButton>
                    <Grid container>
                        <Grid item xl={6} lg={6} sm={12} xs={12}>
                            <Box sx={{
                                p: matches ? 12 : 4,
                                width: '100%',
                                boxSizing: 'border-box'
                            }}>
                                {children}
                            </Box>
                        </Grid>
                        <Grid item xl={6} lg={6} sm={0} xs={0}>
                            <Box sx={{
                                backgroundImage: 'url("https://art.pixilart.com/3cc7263d306fe5c.gif")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '100%',
                                borderTopRightRadius: 4,
                                borderBottomRightRadius: 4
                            }} />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </OverlayingPopup>
    );
}

export default AuthPopup;