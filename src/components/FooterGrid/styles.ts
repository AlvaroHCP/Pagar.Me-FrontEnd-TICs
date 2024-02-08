"use client"

import styled from "styled-components"

export const divWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 1.05fr 1.05fr 1.35fr;
  column-gap: 2.5rem;

  @media (max-width: ${({theme})=> theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem 1.5rem;
  }
`
