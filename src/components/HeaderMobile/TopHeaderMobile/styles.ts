"use client"

import styled from "styled-components"
import Image from "next/image"
import { Scroll } from "."


export const LogoPagarMeMobileStyled = styled(Image) <Scroll>`
align-self: flex-start;
position: absolute;
left: calc(50% - 160px);

${({ initialPosition }) => initialPosition
        ? "transform: translateX(80px); transition: transform 0.4s ease 0.15s;"
        : "transform: translateX(-600px); transition: transform 0.4s ease 0s;"}
`
export const LogoMeMobileStyled = styled.img <Scroll>`
margin-top: -11px;
/* box-sizing: border-box;
outline: 0px; */
position: absolute;
left: 30px;

${({ initialPosition }) => initialPosition
        ? "transform: translateX(-190px); transition: transform 0.8s ease 0s;"
        : "transform: translateX(0px); transition: transform 0.8s ease 0s;"}
`
export const ButtonsMobile = styled.div<Scroll>`
/* @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    button{
        width: 0%;
        display: none;
    }

    a:first-child{
            margin: 0 0 0 3px;
    }
}

@media (min-width: ${({ theme }) => theme.breakpoints.sm}) 
        and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    a:first-child{
            margin: 0 40px 0 3px;
    }
} */

max-width: 289.77px;
margin: -6px 3rem 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

${({ initialPosition }) => initialPosition
        ? " transform: translateX(450px); transition: transform 0.3s ease 0s;"
        : " transform: translateX(0px); transition: transform 0.4s ease 0.2s;"}

    button{
        width: 0%;
        display: none;
    }

    a{
        text-decoration: none;

        &:first-child{
            margin: 0 0 0 3px;
            min-width: 66px;
            color: rgb(69, 69, 80);
            font-weight: 700;
            white-space: nowrap;

            &:hover{
                color:  ${({ theme }) => theme.colors.meadowGreen};
            }
        }
    }

`
export const MobileTopMenu = styled.div`
    --divWidth: 85%;

    width: var(--divWidth);
    height: 75px;
    margin: auto;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`