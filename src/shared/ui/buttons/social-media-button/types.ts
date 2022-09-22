import { ReactNode } from "react"
import { AuthActionType } from "shared/types"

export type SocialMediaButtonProps = {
    icon: ReactNode,
    color: string,
    label: string,
    onClick: () => void
}