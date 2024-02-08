import { MapHTMLAttributes, ObjectHTMLAttributes } from "react"

export interface DropdownProps extends ObjectHTMLAttributes<HTMLElement> {
    dropdownObject: dropdownObjectProps
    index?: number
}
export interface dropdownObjectProps extends ObjectHTMLAttributes<HTMLElement> {
    name: string
    url: string
    dropdown?: dropdownElementProps[]
}
export interface dropdownElementProps extends MapHTMLAttributes<HTMLElement> {
    name: string
    url: string
    device?: string
}

export interface UlDropdownProps extends MapHTMLAttributes<HTMLElement> {
    Drop?: boolean
    FirstTimeLoad?: boolean
}