import { LiHTMLAttributes } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import * as S from "./styles"

export interface liProps {
  $type?: string,
  href: string,
  target: string,
  span_innerText?: string,
  image: {
    alt: string,
    path: string,
    width: number,
    height: number,
    priority?: boolean
  }
}

export interface logoProps extends LiHTMLAttributes<HTMLUListElement> {
  data: liProps[]
}

const Li = ({ span_innerText, image, $type, href, target }: liProps) => { 
  return (
    <S.liWrapper $type={$type!}>
      <S.aWrapper href={href} target={target}>
        <Image
          priority={image.priority} 
          src={image.path}
          alt={image.alt}
          width={image.width} 
          height={image.height}
        />
        <S.spanWrapper>{span_innerText}</S.spanWrapper>
      </S.aWrapper>
    </S.liWrapper>
  )
}

export const LogosFooter = ({ data }: logoProps) => { 
  return (
    <S.logosUlWrapper>
      { data.map((item, index) => {
        return(
          <Li key={index} {...item}/>
          )
        })}
    </S.logosUlWrapper>
  )
  
}