import styled from "styled-components"
import { DropdownWrapperProps } from "./interface"


export const DropdownWrapperClick = styled.div<DropdownWrapperProps>`

background-color: white;
max-width: 240px;
cursor: pointer;

svg {
    transform-origin: 12px 10px;
    ${(props) => props.firstTime ? "" : (props.active
        ? "transform: rotateZ(180deg);"
        : "transform: rotateZ(0deg) ;"
    )}
    transition: transform 0.2s linear 0s;
}  
`
export const DropdownWrapperHover = styled.div`
--DropdownPosition: 87px;

max-width: 240px;
cursor: pointer;

ul {
    display: none;
    font-size: 14px;
    color: rgb(27, 28, 41);
    line-height: 24px;
    letter-spacing: 0.34px;
    transition: all 0.4s linear 0s;
    
    li {
        ul {
            display: none;
            
        }
    }
    
}

a {
    display: none;
text-decoration: none;
color: inherit;
transition: all 0.4s linear 0s;
}

&:hover {
    
    ul {
        display: flex;
        flex-direction: column;
        
        li {
            
            &:hover {
                transition: all 0.1s ease;
                background-color: rgb(241, 241, 241);
            }

            a {
                display: block;
            }
            
        }
        
    }
}
`
export const DropdownButton = styled.button`
border: none;
background: none;
font: inherit;
cursor: pointer;
`
export const ulStyled = styled.ul<DropdownWrapperProps>`
    margin: 2px 0 0 0;
    background-color: rgb(241, 241, 241);
    ${(props) => (props.active
        ? "max-height: 500px; transition: max-height 0.5s ease 0s;"
        : "max-height: 0px; transition: max-height 0.5s ease 0s;"
    )}
    overflow: hidden;

    p{
        padding: calc(14rem / 16) 0 calc(10rem / 16);
        font-size: 14px;
        color: rgb(27, 28, 41);
        line-height: 24px;
        letter-spacing: 0.34px;
        
        a {
            padding: 0.5rem 1rem; 
        }
    }

    p, a {
        text-decoration: none;
        color: inherit;  
    }
`
export const liStyled = styled.li`
`