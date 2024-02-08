"use client"

import styled from "styled-components"


export const ulWrapper = styled.ul`
    list-style: none;
    line-height: 1.45rem;  

    li{
      padding: 8px 0px;
      color: ${({theme})=>theme.colors.white};
      font-size: 0.875rem;
      font-stretch: normal;
      letter-spacing: 0.4px;
      font-family: var(--font-poppins);

      @media (max-width: ${({theme})=> theme.breakpoints.md}) {
        font-size: 0.9rem;
      }
    }
    

    button {
      background: none;
      width: max-content;
      color: ${({ theme }) => theme.colors.white};
      font-family: var(--font-lato);
      font-size: 0.875rem;
      letter-spacing: 0.4px;
      font-weight: 400;
      padding: 0px;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: none;
    }
    
    button:hover {
      opacity: 0.7;
    }

`