import Link from "next/link"
import styled from "styled-components"

export const CadastrarButtonStyled = styled.button`
    color: white;
    z-index: 9;
    white-space: nowrap;
    text-align: center;
    min-width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0px 40px;
    align-self: center;
    height: 2.7rem;
    border-radius: 8px;
    font-family: Lato, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.23px;
    border: none;
    text-decoration: none;
    background-color: rgb(101, 163, 0);
    cursor: pointer;

    &:hover {
        filter: opacity(0.8);
    }
`

export const AnchorStyled = styled(Link)`
    line-height: 24px;
    color: rgb(69, 69, 80);
    
    &:hover {
        transition: all 0s ease;
        color: ${({ theme }) => theme.colors.meadowGreen};
    }
`

export const After = styled.div`
    display: inline;
    margin: 0px 14px;
    border-left: 1px solid rgb(241, 241, 241);
    color: black;
`