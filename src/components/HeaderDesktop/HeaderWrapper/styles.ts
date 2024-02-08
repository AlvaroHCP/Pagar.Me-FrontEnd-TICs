import styled from "styled-components"

export const HeaderWrapper = styled.header`
@media ( max-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
}
    z-index: 9;
    top: 0;
    position: sticky;
    width: 100%;
    height: 95px;
    padding: 8px 0px 12px 0px;
    background: white;
    display: flex;
    justify-content: center;
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;

    a {
        text-decoration: none;
        color: inherit;
        transition: all 0.2s linear 0s;
    }
`
export const HeaderStyled = styled.div`
    width: 80%;
    margin: 0px 144px;
    display: flex;
    justify-content: flex-start;
`
