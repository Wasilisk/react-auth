import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const OverlayingPopup = ({ children }: any) => {
    return (
        <Container
            maxWidth={false}
            sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 0,
                height: '100vh'
            }}>
                    {children}
            <Box sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 1
            }}
            />
        </Container>
    );
}

export default OverlayingPopup;