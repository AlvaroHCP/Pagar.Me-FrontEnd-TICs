import styled from "styled-components"

export const NavBarStyled = styled.div`
width: 100%;
display: flex;
ul {
    display: flex;
    align-items: center;
    list-style: none;
}
`
export const LinksStyled = styled.div`
    min-width: 380px;
    max-width: 670px;
    list-style: none;
    display: flex;
    font-family: Lato, sans-serif;
    color: rgb(69, 69, 80);
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.51px;

        li{
            align-self: center;
            margin-right: 52px;
        }
`
export const HeaderButtonsStyled = styled.div`
    width: 289.77px;
    margin-left: auto;
    display: flex;
    justify-content: right;
    align-items: center;
    
    button{
        width: 0%;
        display: none;
    }
    
    a{
        text-decoration: none;
        
        &:first-child{
            font-weight: 700;
            font-size: 16px;   
        }
        
        &:last-child{
            color: black;
        }
    }
`
