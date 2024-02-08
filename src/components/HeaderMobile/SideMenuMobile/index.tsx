import * as S from "./styles"
import { SideMenuProps } from "./interface";

import { NavBarMobile } from "../NavBarMobile";


export function SideMenuMobile({ activeMenu, ...rest }: SideMenuProps) {

    return (
        <S.MobileMenuStyled {...rest}>
            <S.GreyCurtainStyled
                active={activeMenu}>
            </S.GreyCurtainStyled>
            <S.MobileSideMenu
                active={activeMenu}>
                <NavBarMobile />
            </S.MobileSideMenu>
        </S.MobileMenuStyled>
    )
}