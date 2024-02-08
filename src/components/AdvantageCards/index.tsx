"use client"

import {  useRef } from "react"
import { AdvantageCardsProps } from "./interface"

import * as S from "./styles"


export const AdvantageCards = ({cardsData: {cards, arrows}}: AdvantageCardsProps) => {  

  return (
    <>
      <S.CardsWrapper>
        {
          cards.map(({image,...data}, index) => (
            <S.Wrapper key={data.text+index}>
              <S.ImageWrapper
                src={image.path}
                alt="Payment icon"
                width={image.width} 
                height={image.height}
              />
              <S.TittleWrapper>{data.tittle}</S.TittleWrapper>
              <S.TextWrapper>
                {data.text}
                <span>{data.bolder}</span>
                {data.text2}
              </S.TextWrapper>

            </S.Wrapper>
          ))
        }
      </S.CardsWrapper>
      <S.ArrowsWrapper>
        {
          arrows.map(({path, alt, width, height}, index) => (
            <S.Arrow
              key={alt+index}
              src={path}
              alt={alt}
              width={width}
              height={height}
            />
          ))
        }
      </S.ArrowsWrapper>
    </>

  )
}