import { BaseHTMLAttributes, ObjectHTMLAttributes } from "react"

export interface ObjectRendererProps extends BaseHTMLAttributes<HTMLObjectElement> {
    objectToRender: ElementProps[]
    isList: boolean
}

export interface ElementProps extends ObjectHTMLAttributes<HTMLElement> {
    name: string
    url: string
    imageImported: string
    imageName: string
    type: string
    htmlType: string
    dropdown?: ElementDropdownProps[]
}

export interface ElementDropdownProps extends ObjectHTMLAttributes<HTMLElement> {
    name: string
    url: string
}