import * as S from "./styles"
import { ElementProps, ObjectRendererProps } from "./interface"
import * as imageData from "../../../../public/data/Images.json"
import Image from "next/image"
import { DropdownClick, DropdownHover } from "../Dropdown"
import Link from "next/link"


export function ObjectRenderer({ objectToRender, isList, ...rest }: ObjectRendererProps) {

    const dropdownArrowImage = imageData["Header"]["DropdownArrowSVG"];

    const htmlContentTagRenderer = (element: ElementProps, htmlType: string, index: number) => {
        const contentMapping = {
            "link": element.name == "Entrar"
                ? <S.AnchorStyled href={element.url} key={index}>
                    {element.name}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                        style={{ marginLeft: "8px" }}>
                        <path d="M11.0003 0.00409034C10.7352 0.00409034 10.4809 0.109411 10.2935 0.296884C10.106 0.484356 10.0007 0.738623 10.0007 1.00375V8.59116L1.71351 0.293991C1.52527 0.105752 1.26996 -1.98342e-09 1.00375 0C0.737539 1.98343e-09 0.482231 0.105752 0.293991 0.293991C0.105752 0.482231 1.98343e-09 0.737539 0 1.00375C-1.98342e-09 1.26996 0.105752 1.52527 0.293991 1.71351L8.59116 10.0007H1.00375C0.738623 10.0007 0.484356 10.106 0.296884 10.2935C0.109411 10.4809 0.00409034 10.7352 0.00409034 11.0003C0.00409034 11.2655 0.109411 11.5197 0.296884 11.7072C0.484356 11.8947 0.738623 12 1.00375 12H11.0003C11.131 11.9984 11.26 11.9713 11.3802 11.92C11.6245 11.8186 11.8186 11.6245 11.92 11.3802C11.9713 11.26 11.9984 11.131 12 11.0003V1.00375C12 0.738623 11.8947 0.484356 11.7072 0.296884C11.5197 0.109411 11.2655 0.00409034 11.0003 0.00409034Z"
                            fill="currentColor"></path>
                    </svg>
                </S.AnchorStyled>
                : <S.AnchorStyled href={element.url} key={index}>
                    {element.name}
                </S.AnchorStyled>,
            "button": <Link href={element.url} key={index} >
                <S.CadastrarButtonStyled>
                    {element.name}
                </S.CadastrarButtonStyled>
            </Link>,
            "dropdown": <DropdownHover dropdownObject={element} key={index}></DropdownHover>,
        };

        return contentMapping[htmlType] || <p key={index}>{element.name}</p>;
    }

    return (
        <>
            {
                objectToRender.map((element: ElementProps, index: number) => {

                    if (element.type == "image") {
                        return (
                            <a href={element.url} key={index} >
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
                        {objectToRender.map((element: ElementProps, index: number) => {
                            return (
                                <li key={index} >
                                    {htmlContentTagRenderer(element, element.htmlType, index)}
                                    {element.name == "Já sou cliente" ? <S.After /> : null}
                                </li>
                            )
                        })}
                    </ul>
                    :
                    objectToRender.map((element: ElementProps, index: number) => {
                        return (
                            htmlContentTagRenderer(element, element.htmlType, index)
                        )
                    })
            }
        </>
    )
}
