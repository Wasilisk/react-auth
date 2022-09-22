import { AUTORIZED_CAT, GUEST_CAT } from "shared/config/catsImages/constants";
import useAuth from "shared/libs/hooks/useAuth";
import Typography from "shared/ui/typography";

export const UserGreating = () => {
    const { currentUser } = useAuth();

    return (
        <>
            <img
                height="240px"
                width="240px"
                src={currentUser ? AUTORIZED_CAT : GUEST_CAT}
                alt="Cat"
            />
            <Typography
                variant="h6"
                textAlign="center"
                sx={{ my: 2 }}
            >
                Hello {currentUser ? currentUser.email : "Guest"}
            </Typography>
        </>
    );
}