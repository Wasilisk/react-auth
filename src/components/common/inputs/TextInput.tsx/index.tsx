/* mui */
import {InputBase} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

/* types */
import { CustomInputProps } from '../types';

/* components */
import { InputWrapper } from '../InputWrapper';

export const TextInput = ({ error, errorMessage, ...props }: CustomInputProps) => {
    return (
        <InputWrapper
            icon={<AccountCircleIcon />}
            errorMessage={errorMessage}
            error={error}
        >
            <InputBase
                {...props}
                sx={{
                    pl: 1,
                    width: '100%',

                }}
            />
        </InputWrapper>
    )
}
