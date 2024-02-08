import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface Icon {
  href: string,
  image: {
    alt:string,
    path: string,
    width: number,
    height: number,
    priority?: boolean
  }
}

export interface Link {
  $type?: string, 
  target?: string,
  href: string,
  linkText?: string,
  buttonText?: string,
  text?: string[]
}

export interface Logo {
  $type?: string,
  span_innerText?: string,
  target?:string,
  href: string,
  image: {
    alt: string,
    path: string,
    width: number,
    height: number
    priority?: boolean
  }
}

export interface interfaceSocialMedia {
  pagar_icon: Icon,
  social_icons: Icon[]
}

export interface interfaceFooterGrid {
  [key: string]: Link[];
}

export interface interfaceMain {
  socialIcons: interfaceSocialMedia,
  footerGrid: interfaceFooterGrid
}
