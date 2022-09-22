import { useNavigate, useSearchParams } from "react-router-dom";
import useMediaQuery from "shared/libs/hooks/useMediaQuery";
import Box from "shared/ui/box";
import Grid from "shared/ui/grid";
import MainPopup from "shared/ui/popups/main-popup";

const AuthPopup = ({ children }: any) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const action = searchParams.get('action');
    const matches = useMediaQuery('(min-width:600px)');

    const handleClose = () => navigate('/');

    return (
        <MainPopup isOpen={Boolean(action)} handleClose={handleClose}>
                    <Grid container>
                        <Grid item xl={6} lg={6} sm={12} xs={12}>
                            <Box
                                p={matches ? 12 : 4}
                                boxSizing="border-box"
                                width="100%"
                            >
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
        </MainPopup>
    );
}

export default AuthPopup;