import Typography from "shared/ui/typography";
import { SocialMediaButtonProps } from "./types";
import ButtonBase from "../button-base";

const SocialMediaButton = ({ icon, label, color, onClick }: SocialMediaButtonProps) => {

    return (
        <ButtonBase.Container onClick={onClick} color={color}>
            <ButtonBase.Icon icon={icon} color={color}/>
            <Typography variant="body2" px={2} py={1} flexGrow={1}>{label}</Typography>
        </ButtonBase.Container>
    );
}

export default SocialMediaButton;