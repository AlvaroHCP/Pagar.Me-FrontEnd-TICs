import * as S from "./styles"
import { ElementProps, ObjectRendererProps } from "./interface";

import Image from "next/image"
import { DropdownClickMobile, DropdownHoverMobile } from "../DropdownMobile"
import Link from "next/link";


export function ObjectRendererMobile({ objectToRender, isList, ...rest }: ObjectRendererProps) {

    const htmlContentTagRenderer = (element: ElementProps, htmlType: string, index: number) => {
        const contentMapping = {
            "link": element.name == "Entrar"
                ? <S.EntrarStyled href={element.url} key={index}>
                    {element.name}
                </S.EntrarStyled>
                : <S.AnchorStyled href={element.url} key={index}>
                    {element.name}
                </S.AnchorStyled>,
            "button": <Link href={element.url} key={index} >
                <S.CadastrarButtonStyled>
                    {element.name}
                </S.CadastrarButtonStyled>
            </Link>,
            "dropdown": <DropdownClickMobile dropdownObject={element} key={index}></DropdownClickMobile>,
        };

        return contentMapping[htmlType] || <p key={index}>{element.name}</p>;
    }

    return (
        <>
            {
                objectToRender.map((element: ElementProps, index: number) => {

                    if (element.type == "image") {
                        return (
                            <a href={element.url} key={index}>
                                <Image src={element.imageImported} alt={element.imageName} style={{ marginRight: "40px" }} />
                            </a>
                        )
                    }
                    htmlContentTagRenderer(element, element.htmlType, index)
                })
            }
            {
                isList ?
                    <ul>
                        {objectToRender.map((element: any, index: number) => {
                            return (
                                <li key={index}>
                                    {htmlContentTagRenderer(element, element.htmlType, index)}
                                    {element.name == "Já sou cliente" ? <S.After /> : null}
                                </li>
                            )
                        })}
                    </ul>
                    :
                    objectToRender.map((element: any, index: number) => {
                        return (
                            htmlContentTagRenderer(element, element.htmlType, index)
                        )
                    })
            }
        </>
    )
}
