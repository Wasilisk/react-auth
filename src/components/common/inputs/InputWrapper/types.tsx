import { ReactNode } from "react";
import { CustomInputProps } from "../types";

export type InputWrapperProps = Pick<CustomInputProps, "errorMessage" | "error"> & {
    children: ReactNode,
    icon: ReactNode
}