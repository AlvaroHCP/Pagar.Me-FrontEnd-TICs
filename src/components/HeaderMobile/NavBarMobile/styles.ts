"use client"

import styled from "styled-components"

export const MobileNavBar = styled.div`
    ul{
        margin-top: 1.3em;
        list-style: none;

        li{
            padding: 0.5rem 0rem;
        }

        a{
            padding: 0rem 1rem;
            color: rgb(69, 69, 80);
        }
    }

    button {
        padding: 0rem 1rem;
    }

    a{
        font-family: Lato, sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.26px;
        text-decoration: none;
    }
`