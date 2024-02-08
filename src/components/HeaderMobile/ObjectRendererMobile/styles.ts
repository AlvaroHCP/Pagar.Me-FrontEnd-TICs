import Link from "next/link"
import styled from "styled-components"


export const CadastrarButtonStyled = styled.button`
    width: 150px;
    min-width: 5rem;
    height: 3rem;
    margin: 7em 0px 1.5em 1.2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    align-self: center;
    background-color: ${({ theme }) => theme.colors.meadowGreen};
    border-radius: 8px;
    border: none;
    text-decoration: none;
`
export const AnchorStyled = styled(Link)`
    text-decoration: none;
    font-family: Lato, sans-serif;
    line-height: 24px;
    letter-spacing: 0.51px;
    -webkit-font-smoothing: antialiased !important;
`
export const EntrarStyled = styled(Link)`
height: 41px;
padding: 10px 24px; 
margin: 3em 0px 0px 1.2rem;

display: inline-flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;

letter-spacing: 0.025em;
line-height: 21px;
white-space: nowrap;

color: ${({ theme }) => theme.colors.meadowGreen};
border: 1px solid ${({ theme }) => theme.colors.meadowGreen};
border-radius: 8px;
`
export const After = styled.div`
    display: inline;
    margin: 0px 14px;
    border-left: 1px solid rgb(241, 241, 241);
    color: black;
`