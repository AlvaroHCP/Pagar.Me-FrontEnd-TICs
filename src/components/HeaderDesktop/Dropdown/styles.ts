import styled from "styled-components"
import { UlDropdownProps } from "./interface"


export const DropdownWrapper = styled.div`
--DropdownPosition: 58px;

line-height: 24px;
max-width: 105px;
cursor: pointer;

&:hover {
    div:first-child{
        color: ${({ theme }) => theme.colors.meadowGreen};
    }
    
    ul {
        max-height: 500px;
        transition: max-height 0.25s ease-in-out 0s;
        
        
        li {
            &:hover {
                transition: all 0.1s ease-in-out;
                background-color: rgb(241, 241, 241);
            }
            
        }
        
    }
}
`
export const DropdownButton = styled.div<UlDropdownProps>`
    transition: all 0.1s ease;
    white-space: nowrap;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.51px;
    font-family: Lato, sans-serif;
    color: rgb(69, 69, 80);
`
export const ulStyled = styled.ul<UlDropdownProps>`
    max-height: 0px;
    width: 300px;
    position: absolute;
    top: var(--DropdownPosition);
    z-index: 8;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: rgb(27, 28, 41);
    line-height: 24px;
    letter-spacing: 0.34px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: max-height 0.25s ease-in-out 0s;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 8px 16px 0px;

    li {
        margin: 10px 0 0 auto;
        height: 40px;
        width: 300px;
        display: flex;
        align-items: center;

        &:last-child{
            margin-bottom: 10px;
        }
        
        a {
            display: block;
            margin: 10px 0px;
            padding: 8px 20px;
            color: rgb(27, 28, 41);
        }
    }
`