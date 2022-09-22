import useMediaQuery from "shared/libs/hooks/useMediaQuery";
import Backdrop from "shared/ui/backdrop";
import Box from "shared/ui/box";
import IconButton from "shared/ui/buttons/icon-button";
import Container from "shared/ui/container";
import CloseIcon from "shared/ui/icons/close";
import Paper from "shared/ui/paper";
import { MainPopupTypes } from "./types";

const MainPopup = ({ children, isOpen, handleClose }: MainPopupTypes) => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Box 
        position="absolute" 
        top={0} 
        right={0} 
        bottom={0} 
        left={0} 
        display="flex" 
        alignItems="center"
        >
            <Backdrop
                open={isOpen}
                onClick={handleClose}
                transitionDuration={0}
            />
                <Container maxWidth={false} sx={{px: 0}}>
                    <Paper
                        elevation={5}
                        sx={{
                            zIndex: 1300,
                            position: 'relative',
                            height: matches ? 'auto' : "100vh"
                        }}
                    >
                        <IconButton sx={{
                            position: 'absolute',
                            top: 4,
                            left: 4
                        }}
                            onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        {children}
                    </Paper>
                </Container>
        </Box>
    );
}

export default MainPopup;