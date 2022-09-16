/* mui */
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import { grey } from "@mui/material/colors";

const CustomDivider = styled(Divider)({
    margin: '32px 0',
    '& .MuiDivider-wrapper': {
        padding: '0 32px',
        color: grey[500],
        fontSize: '18px'
    }
});

export default CustomDivider;
