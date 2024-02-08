import * as S from "./styles"

import { ObjectRenderer } from "../ObjectRenderer"
import * as data from "../../../../public/data/HeaderObjects.json"

export function TopHeader() {

    const topHeader = data["Header"]["TopHeader"];

    return (
        <S.TopHeader>
            <ObjectRenderer objectToRender={topHeader} isList={true} />
        </S.TopHeader>
    )
}