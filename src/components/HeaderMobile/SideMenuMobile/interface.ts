import { HtmlHTMLAttributes } from "react"

export interface SideMenuProps extends HtmlHTMLAttributes<HTMLDivElement> {
    activeMenu: boolean
}

export interface AnimationProps extends HtmlHTMLAttributes<HTMLDivElement> {
    active: boolean
}