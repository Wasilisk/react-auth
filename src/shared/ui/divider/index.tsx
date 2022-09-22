import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const CustomDivider = styled(Divider)(({theme}) => ({
    margin: `${theme.spacing(4)} 0`,
    '& .MuiDivider-wrapper': {
        padding: `0 ${theme.spacing(4)}`,
        color: theme.palette.grey[500],
        fontSize: '18px'
    }
}));

export default CustomDivider;