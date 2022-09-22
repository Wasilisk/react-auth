import { ReactNode } from "react";

export type ButtonContainerProps = { children: ReactNode, onClick: () => void, color: string };
export type ButtonIconProps = {icon: ReactNode, color: string};