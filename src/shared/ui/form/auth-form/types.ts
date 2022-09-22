import { AuthValues } from "features/auth/types";

export type AuthFormProps = {
    validationSchema: Object,
    buttonLabel: string,
    onSubmit: (values: AuthValues) => void;
    onSuccess: () => void;
}