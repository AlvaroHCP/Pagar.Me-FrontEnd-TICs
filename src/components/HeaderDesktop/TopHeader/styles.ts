import styled from "styled-components"

export const TopHeader = styled.div`
@media ( max-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
}

    width: 80%;
    height: 31px;
    margin: 0px auto;
    display: flex;
    -webkit-box-pack: flex-end;
    justify-content: flex-end;
    align-items: flex-end;
    font-family: Lato, sans-serif;
    font-size: 0.75rem;
    line-height: 18px;
    letter-spacing: 0.26px;
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;        
        color: rgb(101, 163, 0);
        height: 18px;
        font-family: Lato, sans-serif;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.26px;

        li{
            :hover {
                filter: opacity(0.8);
            }
        }
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: all 0.4s linear 0s;
    }
`