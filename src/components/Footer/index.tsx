import { HTMLAttributes } from "react"
import { MainFooter, MainProps } from "../MainFooter"
import { StoneFooter, StoneProps } from "../StoneFooter"

import json from "@/utils/json/payloadMock.json"

import * as S from "./styles"

// interface FooterProps extends HTMLAttributes<HTMLDivElement> {
//   mainFooter: MainProps;
//   stoneFooter: StoneProps;
// }

export const Footer = ()=> {
   
  return (
  < S.footerWrapper>
    <S.footerContainerWrapper>
      <MainFooter {...json["mainFooter"]}/>
      <StoneFooter {...json["stoneFooter"]}/>
    </S.footerContainerWrapper>
  </S.footerWrapper>
  ) 
}