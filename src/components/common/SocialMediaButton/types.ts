import { ReactNode } from "react"

export type AuthActionType = "sign-in" | "sign-up"

export type SocialMediaButtonProps = {
    icon: ReactNode,
    socialMediaName: string
    color: string,
    authAction: AuthActionType
    onClick: () => void
}