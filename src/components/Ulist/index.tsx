import { LiHTMLAttributes } from "react";
import { Anchor, AnchorProps } from "../Anchor";
import { Button } from "../Button";

import * as S from "./styles"

export interface UlProps extends LiHTMLAttributes<HTMLUListElement> {
  arrayObj: AnchorProps[];
}

const formatAddressText = (text: string[]) => {    
  return text.map((item, index) => (
    <span key={index}>
      {item}
      <br/>
    </span>
  ))
}


export const Ulist = ({ arrayObj, ...rest }: UlProps) => { 
  
  return (
    <S.ulWrapper {...rest}>
      {arrayObj
        .map(({ text, buttonText, ...item}, index) => (
          <li key={index}>
            { text && item.$type === "address" ? formatAddressText(text) : text }
            
            { item.$type === "button" 
              ? <Button text={buttonText} /> 
              : <Anchor {...item} />
            } 
          </li>
        ))
      }   
    </S.ulWrapper>
  )
}