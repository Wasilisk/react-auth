/* mui */
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { darken } from "@mui/material/styles";

/* types */
import { SocialMediaButtonProps } from "./types";

const SocialMediaButton = ({ icon, socialMediaName, authAction, color, onClick }: SocialMediaButtonProps) => {
    const buttonLabel = (authAction === "sign-in" ? "Login" : "SingUp") + " with " + socialMediaName;

    return (
        <Button variant="contained"
            sx={{
                p: 0,
                backgroundColor: color,
                '&:hover': {
                    backgroundColor: darken(color, 0.1),
                },
                justifyContent: 'space-between'
            }}
            onClick={onClick}>
            <Box sx={{
                p: 1,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: darken(color, 0.2),
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px'
            }}>
                {icon}
            </Box>
            <Typography variant="body2" sx={{ px: 2, py: 1, flexGrow: 1 }}>{buttonLabel}</Typography>
        </Button>
    );
}

export default SocialMediaButton;