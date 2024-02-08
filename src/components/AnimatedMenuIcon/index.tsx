"use client"

import * as S from "./styles"
import { MenuButtonProps } from "./interface";

export function AnimatedMenuIcon({ toggle, setToggle, allowAnimation, ...rest }: MenuButtonProps) {

    function toggleFunction() {
        setToggle((toggle: boolean) => !toggle);
    }

    return (
        <S.MenuButtonAnimatedStyled
            active={toggle}
            allowAnimation={allowAnimation}
            onClick={toggleFunction}>
            <span className="span1 span1Animation"></span>
            <span className="spanSpaced span2Animation"></span>
            <span className="spanSpaced span3Animation"></span>
        </S.MenuButtonAnimatedStyled>
    )
}