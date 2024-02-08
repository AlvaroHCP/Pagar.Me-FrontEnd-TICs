"use client"

import * as S from "./styles"

import { useEffect, useState } from "react"
import { AnimatedMenuIcon } from "../AnimatedMenuIcon"
import { TopHeaderMobile } from "./TopHeaderMobile"
import { SideMenuMobile } from "./SideMenuMobile"


export function HeaderMobile() {
    const [toggleAnimation, setToggleAnimation] = useState(false);
    const [allowAnimation, setAllowAnimation] = useState(false);

    useEffect(() => {
        if (toggleAnimation) {
            setAllowAnimation(true)
        }
    }, [toggleAnimation])


    return (
        <S.MobileAnimatedHeader>

            <AnimatedMenuIcon
                allowAnimation={allowAnimation}
                toggle={toggleAnimation}
                setToggle={setToggleAnimation}>
            </AnimatedMenuIcon>

            <TopHeaderMobile />

            <SideMenuMobile
                activeMenu={toggleAnimation}
            />

        </S.MobileAnimatedHeader >
    )
}