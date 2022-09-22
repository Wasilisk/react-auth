import InputBase from "../input-base"
import InputWrapper from "../input-wrapper"
import UserIcon from "shared/ui/icons/user"
import { CustomInputProps } from "../types"

export const TextInput = ({ error, errorMessage, ...props }: CustomInputProps) => {
    return (
        <InputWrapper.Container>
            <InputWrapper.Icon icon={<UserIcon/>}/>
            <InputBase
                {...props}
                sx={{
                    pl: 1,
                    width: '100%',

                }}
            />
            <InputWrapper.ErrorText error={error} errorMessage={errorMessage}/>
        </InputWrapper.Container>
    )
}
