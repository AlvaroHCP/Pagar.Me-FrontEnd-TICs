import * as S from "./styles"

import { ObjectRenderer } from "../ObjectRenderer"

import * as imageData from "../../../../public/data/Images.json"
import LogoPagarMePicture from "/public/assets/images/logo_pagarme.svg"
import { NavBar } from "../NavBar";

export function HeaderWrapper() {

    const logoPagarMe = imageData["Header"]["LogoPagarMe"];
    logoPagarMe[0]["imageImported"] = LogoPagarMePicture;

    return (
        <>
            <S.HeaderWrapper>
                <S.HeaderStyled>
                    <ObjectRenderer objectToRender={logoPagarMe} isList={false} />
                    <NavBar />
                </S.HeaderStyled>
            </S.HeaderWrapper>
        </>

    )
}