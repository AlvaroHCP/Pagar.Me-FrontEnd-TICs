"use client"

import * as S from "./styles"
import { useState } from "react"
import { DropdownProps, UlDropdownProps, dropdownElementProps } from "./interface"


export const UlDropdown = ({ dropdownObject, index, Drop, FirstTimeLoad, ...rest }: DropdownProps & UlDropdownProps) => {

    return (
        <S.ulStyled Drop={Drop} FirstTimeLoad={FirstTimeLoad} key={index}>
            {dropdownObject.dropdown?.map((item: dropdownElementProps, index: number) => {
                if (item.device == "mobile") {
                    return (null)
                }
                return (
                    <li key={index}>
                        <a href={item.url}>
                            {item.name}
                        </a>
                    </li>
                )
            })}
        </S.ulStyled>
    )
}


export const DropdownClick = ({ dropdownObject, ...rest }: DropdownProps) => {
    const [dropdownActive, setDropdownActive] = useState(false)
    const [firstTimeLoad, setFirstTimeLoad] = useState(false)

    function toggleFunction() {
        if (!firstTimeLoad) {
            setFirstTimeLoad(true)
        }
        setDropdownActive((dropdownActive: boolean) => !dropdownActive)
    }

    return (
        <S.DropdownWrapper {...rest} onClick={toggleFunction}>
            <S.DropdownButton Drop={dropdownActive} FirstTimeLoad={firstTimeLoad}>
                {dropdownObject.name}
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "8px" }}>
                    <g id="icon_dropdown" data-name="icon/dropdown" transform="translate(-1308 -66)">
                        <path id="container" d="M0 0h24v24H0z" transform="translate(1308 66)"></path>
                        <path id="arrow" d="M5 103.141a.681.681 0 0 1-.5-.216L.206 98.4a.765.765 0 0 1 0-1.042.676.676 0 0 1 .99 0l3.8 4 3.8-4a.676.676 0 0 1 .99 0 .765.765 0 0 1 0 1.042l-4.3 4.526a.681.681 0 0 1-.486.215z"
                            transform="translate(1314.999 -24.141)"></path>
                    </g>
                </svg>
            </S.DropdownButton>
            <UlDropdown dropdownObject={dropdownObject} Drop={dropdownActive} FirstTimeLoad={firstTimeLoad}></UlDropdown>
        </S.DropdownWrapper>
    )
}



export const DropdownHover = ({ dropdownObject, index, ...rest }: DropdownProps) => {

    return (
        <S.DropdownWrapper {...rest}>
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

            <UlDropdown
                dropdownObject={dropdownObject}
                key={index}>
            </UlDropdown>
        </S.DropdownWrapper>
    )
}
