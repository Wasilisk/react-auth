import { grey } from "@mui/material/colors";
import GlobalStyles from "@mui/material/GlobalStyles";

const CustomGlobalStyles = () => {
    return(
        <GlobalStyles
        styles={{
          body: {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            margin: 0
          },
          '#root': {
            height: '100vh',
            widht: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: grey[100]
          },
        }}
    />
    );
}

export default CustomGlobalStyles;