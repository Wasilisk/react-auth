import { useState } from "react";
import InputWrapper from "../input-wrapper";
import { CustomInputProps } from "../types";
import InputBase from "../input-base";
import IconButton from "shared/ui/buttons/icon-button";
import InputAdornment from "../input-adorment";
import KeyIcon from "shared/ui/icons/key";
import Visibility from "shared/ui/icons/visibility";
import VisibilityOff from "shared/ui/icons/visibility-off";

export const PasswordInput = ({ error, errorMessage, ...props }: CustomInputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(prevState => !prevState);

    return (
        <InputWrapper.Container>
        <InputWrapper.Icon icon={<KeyIcon/>}/>
            <InputBase
            fullWidth
                {...props}
                type={showPassword ? "text" : "password"}
                sx={{ px: 1}}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                } />
        <InputWrapper.ErrorText error={error} errorMessage={errorMessage}/>
        </InputWrapper.Container>
    )
};