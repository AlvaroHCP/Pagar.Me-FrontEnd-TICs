import * as S from "./styles"

import { ObjectRendererMobile } from "../ObjectRendererMobile";
import * as data from "../../../../public/data/HeaderObjects.json"


export function NavBarMobile({ ...rest }) {

    const buttonsMobile = data["Header"]["Buttons"].toReversed();

    const listMobile = data["Header"]["NavBar"];

    const bottomMobile = data["Header"]["TopHeader"];



    return (
        <S.MobileNavBar {...rest}>
            <ObjectRendererMobile objectToRender={buttonsMobile} isList={false} />
            <ObjectRendererMobile objectToRender={listMobile} isList={true} />
            <ObjectRendererMobile objectToRender={bottomMobile} isList={true} />
        </S.MobileNavBar>
    )
}