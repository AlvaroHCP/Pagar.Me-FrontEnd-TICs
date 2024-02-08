"use client"

import styled from "styled-components"

export const MobileAnimatedHeader = styled.header`
    @media ( min-width: calc(${({ theme }) => theme.breakpoints.xl} + 1px) ) {
        display: none;
    }
    z-index: 9;
    top: 0;
    position: sticky;
    height: 95px;
    margin: 0 auto;
    padding: 8px 0px 12px 0px;
    background-color: white;
    top: 0;
    position: sticky;
    display: flex;
    align-items: center;

`