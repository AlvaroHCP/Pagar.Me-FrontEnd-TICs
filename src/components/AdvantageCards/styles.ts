"use client"

import Image from "next/image";
import styled from "styled-components";


export const CardsWrapper = styled.div`

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 20.6rem;
    top: -9rem;
    left: 4.55rem;
    overflow: hidden;

  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) 
    and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 42.32rem;
    top: -11rem;
    left: 5.65rem;
    overflow: hidden;
    
  }

  display: flex;
  /* position: absolute; */
  position: relative;
  width: 74.5rem;
  height: 20.075rem;
  top: -13rem;
  left: 7.75rem;
  /* top: 30.3rem; */
  padding-right: 1.5rem;
  gap: 1.5rem;
  scroll-behavior: smooth;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 17.5rem;
  height: 19.375rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: .125rem .125rem .25rem 0 #00000021;
  border-radius: .5rem;
`

export const ImageWrapper = styled(Image)`

`

export const TittleWrapper = styled.h1`
  width: 12rem;
  height: 2.75rem;
  font-family: var(--font-poppins700);
  font-size: 1.25rem;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.colors.meadowGreen};

`

export const TextWrapper = styled.p`
  width: 14.5rem;
  height: 8rem;
  font-family: var(--font-lato);
  font-size: 1rem;
  line-height: 1.4rem;

  & span {
    font-weight: 700;
  }
`

export const ArrowsWrapper = styled.div`

@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 4.625rem;
    top: 17.3125rem;
    left: 6.875rem;
  }
@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    left: 9.375rem;
  }

  display: none;
`

export const Arrow = styled(Image)`
`




