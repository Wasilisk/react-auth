import { darken } from "@mui/material/styles";
import { ReactNode } from "react";
import Box from "shared/ui/box";
import Button from "shared/ui/buttons/button";
import { ButtonContainerProps } from "./types";

const ButtonBase = () => {};

const ButtonContainer = ({ children, onClick, color }: ButtonContainerProps) => (
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
        {children}
    </Button>

)

const ButtonIcon = ({ icon, color }: { icon: ReactNode, color: string }) => (
    <Box
        p={1}
        height="100%"
        display="flex"
        alignItems="center"
        bgcolor={darken(color, 0.2)}
        justifyContent="center"

        sx={{
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px'
        }}>
        {icon}
    </Box>
)

ButtonBase.Container = ButtonContainer;
ButtonBase.Icon = ButtonIcon;

export default ButtonBase;