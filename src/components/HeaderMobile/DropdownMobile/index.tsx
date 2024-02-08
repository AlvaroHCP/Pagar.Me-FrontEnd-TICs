import * as S from "./styles"
import { DropdownProps, DropdownWrapperProps, dropdownElementProps } from "./interface"

import { useState } from "react"
import Link from "next/link"


export const UlDropdownMobile = ({ dropdownObject, index, active, ...rest }: DropdownProps & DropdownWrapperProps) => {

    return (
        <S.ulStyled active={active} as={"div"} key={index}>
            {dropdownObject.dropdown?.map((item: dropdownElementProps, index: number) => {
                return (
                    <S.liStyled as={"p"} key={index}>
                        <Link href={item.url}>
                            {item.name}
                        </Link>
                    </S.liStyled>
                )
            })}
        </S.ulStyled>
    )
}


export const DropdownHoverMobile = ({ dropdownObject, index, ...rest }: DropdownProps) => {

    return (
        <S.DropdownWrapperHover {...rest} key={index}>
            <S.DropdownButton>
                {dropdownObject.name}
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="icon_dropdown" data-name="icon/dropdown" transform="translate(-1308 -66)">
                        <path id="container" d="M0 0h24v24H0z" transform="translate(1308 66)"></path>
                        <path id="arrow" d="M5 103.141a.681.681 0 0 1-.5-.216L.206 98.4a.765.765 0 0 1 0-1.042.676.676 0 0 1 .99 0l3.8 4 3.8-4a.676.676 0 0 1 .99 0 .765.765 0 0 1 0 1.042l-4.3 4.526a.681.681 0 0 1-.486.215z"
                            transform="translate(1314.999 -24.141)" fill="currentColor"></path>
                    </g>
                </svg>
            </S.DropdownButton>
            <UlDropdownMobile
                dropdownObject={dropdownObject} key={index}>
            </UlDropdownMobile>
        </S.DropdownWrapperHover>
    )
}

export const DropdownClickMobile = ({ dropdownObject, index, ...rest }: DropdownProps & DropdownWrapperProps) => {
    const [activateDropdown, setActivateDropdown] = useState(false)
    const [firstTime, setFirstTime] = useState(true)

    function OpenCloseDropdown() {
        if (firstTime == true) {
            setFirstTime(false)
        }
        setActivateDropdown(!activateDropdown)
        console.log(activateDropdown);

    }

    return (
        <S.DropdownWrapperClick active={activateDropdown} firstTime={firstTime} key={index} {...rest}>
            <S.DropdownButton onClick={OpenCloseDropdown} >
                {dropdownObject.name}
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="icon_dropdown" data-name="icon/dropdown" transform="translate(-1308 -66)">
                        <path id="container" d="M0 0h24v24H0z" transform="translate(1308 66)"></path>
                        <path id="arrow" d="M5 103.141a.681.681 0 0 1-.5-.216L.206 98.4a.765.765 0 0 1 0-1.042.676.676 0 0 1 .99 0l3.8 4 3.8-4a.676.676 0 0 1 .99 0 .765.765 0 0 1 0 1.042l-4.3 4.526a.681.681 0 0 1-.486.215z"
                            transform="translate(1314.999 -24.141)" fill="currentColor"></path>
                    </g>
                </svg>
            </S.DropdownButton>

            <UlDropdownMobile
                active={activateDropdown}
                dropdownObject={dropdownObject}
                key={index}>
            </UlDropdownMobile>
        </S.DropdownWrapperClick>
    )
}
