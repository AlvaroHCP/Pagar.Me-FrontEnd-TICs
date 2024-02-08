"use client"

import styled from "styled-components"
import { AnimationProps } from "./interface"


export const MobileMenuStyled = styled.div`
--widthMobileMenu: 250px;
`
export const GreyCurtainStyled = styled.div<AnimationProps>`
    --greyCurtainLeftWidth: calc(100% - var(--widthMobileMenu));

    position: fixed;
    top: 0px;
    left: 0px;
    bottom:0px;
    height: 100%;
    background: rgba(0, 0, 0, 0.32);
    z-index: 9;
    ${props => props.active
        ? "width: var(--greyCurtainLeftWidth); transition: width 0.4s ease 0s;"
        : "width: 0rem; transition: width 0.4s ease 0s;"}
`
export const MobileSideMenu = styled.div<AnimationProps>`
   
    z-index: 12;
    position: fixed;
    width: var(--widthMobileMenu); 
    top: 0px;
    right: 0px;
    bottom: 0px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 8px 16px 0px;

    ${props => props.active ? "transform: translateX(0px); transition: transform 0.4s ease 0s;"
        : "transform: translateX(450px); transition: transform 0.4s ease 0s;"}
   
   -webkit-font-smoothing: antialiased !important;

    ul{
        &:nth-child(3) {
            p{
                a{
                    font-size: 14px;
                }
            }
            a{
                font-size: 16px;
            }
        }
    
        &:last-child {
            li:first-of-type {
                a{
                    color: ${({ theme }) => theme.colors.meadowGreen};
                }
            }
            a{
                font-weight: 600;
                text-transform: uppercase;
            }
        }
    }
    
    li:nth-child(2) {
        display: flex;
        flex-direction: column;
    }
`