import HelperText from "shared/ui/helper-text"
import Box from "shared/ui/box";
import { InputWrapperContainerProps, InputWrapperErrorTextProps, InputWrapperIconProps } from "./types";
import colors from "shared/libs/colors"

const InputWrapper = () => { };

const Container = ({ children }: InputWrapperContainerProps) => (
    <Box
        display="flex"
        alignItems="center"
        width="100%"
        borderRadius={2}
        position="relative"
        border={`solid 1px ${colors.grey[500]}`}
    >
        {children}
    </Box>
)

const Icon = ({ icon }: InputWrapperIconProps) => (
    <Box
        color={colors.grey[500]}
        p={2}
        borderRight={`solid 1px ${colors.grey[500]}`}
    >
        {icon}
    </Box>
);

const ErrorText = ({ error, errorMessage }: InputWrapperErrorTextProps) => {
    if (error) {
        return (
            <HelperText
                sx={{
                    position: 'absolute',
                    top: 60,
                    color: "red"
                }}>
                {errorMessage}
            </HelperText>
        )
    }
    return null;
}

InputWrapper.Container = Container;
InputWrapper.Icon = Icon;
InputWrapper.ErrorText = ErrorText;

export default InputWrapper;