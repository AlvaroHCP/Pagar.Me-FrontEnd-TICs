"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;

    ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: rgb(69, 69, 80);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.meadowGreen};
        border-radius: 2px;
    }
  }

  body {
    font-family: var(--font-poppins);
  }
`
