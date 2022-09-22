import { ReactNode } from "react"

export type InputWrapperContainerProps = {
    children: ReactNode;
}

export type InputWrapperIconProps = {
    icon: ReactNode;
}

export type InputWrapperErrorTextProps = {
    error: boolean | undefined,
    errorMessage: string | undefined
}