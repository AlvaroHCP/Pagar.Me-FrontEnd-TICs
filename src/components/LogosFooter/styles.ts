"use client"

import styled, { css } from "styled-components"

export const aWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-pack: start;
  -webkit-box-align: center;
  transition: all 0.25s ease-in-out 0s;
  min-height: 5rem;

`

export const spanWrapper = styled.span`
  margin-top: 0.625rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: var(--font-lato);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  transition: all 0.30s ease-in-out 0s;
  opacity: 0;
  
`
export const logosUlWrapper = styled.ul`
  display: flex;
  justify-items: flex-start;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  li {
    display: flex;
    flex-direction: column;
    margin-right: 2.5rem;
    padding-top: 1.875rem;
    align-items: center;
    -webkit-box-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-right: 0px;
    }
  }
`

export const liWrapper = styled.li<{ $type: string }>`
  ${({ $type }) => {
    if ($type === "selected") {
      return css`
        border-top: 2px solid ${({ theme }) => theme.colors.titleGreen};
        margin-top: -2px;

        a {
          transform: translateY(-10px);
        }

        a span {
          opacity: 1;
        }
      `
    }
    if ($type === "opacityIcon") {
      return css`
        img  {
          opacity: 0.3;
        }
        &:hover img {
          opacity: 1;
        }
      `
    }
  }}

  &:hover {
    border-top: 2px solid ${({ theme }) => theme.colors.titleGreen};
    margin-top: -2px;
  }

  &:hover a  {
    transform: translateY(-10px);
  }

  &:hover span {
    opacity: 1;
  }
`