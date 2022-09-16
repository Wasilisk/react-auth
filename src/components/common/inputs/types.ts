import { InputProps } from "@mui/material/Input";

export type CustomInputProps = InputProps & {errorMessage: string | undefined};