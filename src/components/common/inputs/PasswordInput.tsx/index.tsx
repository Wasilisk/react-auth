/* node-nodules */
import { useState } from 'react';

/* mui */
import { IconButton, InputAdornment, InputBase } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import { Visibility, VisibilityOff } from '@mui/icons-material';

/* types */
import { CustomInputProps } from '../types';

/* components */
import {InputWrapper} from '../InputWrapper';

export const PasswordInput = ({ error, errorMessage, ...props }: CustomInputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <InputWrapper
            icon={<KeyIcon />}
            errorMessage={errorMessage}
            error={error}
        >
            <InputBase
                {...props}
                type={showPassword ? "text" : "password"}
                sx={{ px: 1, width: '100%' }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                } />
        </InputWrapper>
    )
};