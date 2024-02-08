import * as S from "./styles"

import { ObjectRenderer } from "@/components/HeaderDesktop/ObjectRenderer"
import LogoPagarMe from "/public/assets/images/logo_pagarme.svg"
import * as data from "../../../../public/data/HeaderObjects.json"
import * as images from "../../../../public/data/Images.json"

import { useCallback, useEffect, useState } from "react"

export interface Scroll {
    initialPosition: boolean
}
export function TopHeaderMobile() {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    const handleScroll = useCallback(() => {
        setScrollPosition(window.scrollY)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [handleScroll])

    const buttons = data["Header"]["Buttons"];
    const LogoMe = images["Header"]["Logo.Me"];


    let initial = scrollPosition > 0 ? false : true;

    return (
        <S.MobileTopMenu>
            <S.LogoPagarMeMobileStyled
                src={LogoPagarMe}
                alt={"Logo Pagar.me"}
                initialPosition={initial}>
            </S.LogoPagarMeMobileStyled>
            <S.LogoMeMobileStyled
                src={LogoMe}
                alt={"Logo.me"}
                initialPosition={initial}>
            </S.LogoMeMobileStyled>
            <S.ButtonsMobile
                initialPosition={initial}>
                <ObjectRenderer objectToRender={buttons} isList={false} />
            </S.ButtonsMobile>
        </S.MobileTopMenu>
    )
}