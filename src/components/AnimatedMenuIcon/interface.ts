import { ButtonHTMLAttributes, Dispatch, HtmlHTMLAttributes, SetStateAction } from "react"

export interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
    allowAnimation: boolean
}

export interface AnimationProps extends HtmlHTMLAttributes<HTMLDivElement> {
    active: boolean
    allowAnimation: boolean
}