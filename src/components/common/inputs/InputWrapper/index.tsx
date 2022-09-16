/* mui */
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/* types */
import { InputWrapperProps } from "./types";

export const InputWrapper = ({ icon: MuiIcon, children: Input, error, errorMessage }: InputWrapperProps) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            border: `solid 1px ${grey[500]}`,
            borderRadius: 2,
            width: "100%",
            position: 'relative',
        }}>
            <Box sx={{
                color: grey[500],
                p: 2,
                borderRight: `solid 1px ${grey[500]}`
            }}
            >
                {MuiIcon}
            </Box>
            {Input}
            {
                error && <Typography
                    variant='caption'
                    color="error"
                    sx={{
                        position: 'absolute',
                        top: 60
                    }}>
                    {errorMessage}
                </Typography>
            }
        </Box>
    )
};