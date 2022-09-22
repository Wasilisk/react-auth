import { ReactNode } from "react"

export type MainPopupTypes = {
    children: ReactNode,
    isOpen: boolean, 
    handleClose: () => void
}