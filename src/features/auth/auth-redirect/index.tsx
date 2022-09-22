import Box from "shared/ui/box";
import Link from "shared/ui/link";
import {Link as RouterLink, useSearchParams} from "react-router-dom"
import colors from "shared/libs/colors";
import Typography from "shared/ui/typography";

const AuthRedirect = () => {
    const [searchParams] = useSearchParams();
    const action = searchParams.get('action');
    
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 2
          }}
          >
            <Link
              underline='none'
              component={RouterLink}
              to={action === "login" ? "?action=registration" : "?action=login"}
            >
              {action === "login" ? "Register now" : "Already registered ?"}
            </Link>
            <Typography
              color={colors.grey[500]}
            >
              Forgot password ?
            </Typography>
          </Box>
    );
}

export default AuthRedirect;