import * as S from "./styles"

import { ObjectRenderer } from "../ObjectRenderer"
import * as data from "../../../../public/data/HeaderObjects.json"

export function NavBar() {

    //     {
    //         name: "Soluções",
    //         url: "",
    //         imageImported: "",
    //         imageName: "",
    //         type: "text",
    //         htmlType: "dropdown",
    //         dropdown: [
    //             {
    //                 name: "Pronto para usar",
    //                 url: "https://pagar.me/pronto-para-usar"
    //             },
    //             {
    //                 name: "Integre com nossos produtos",
    //                 url: "https://pagar.me/integre-com-nossos-produtos"
    //             },
    //             {
    //                 name: "O Pagar.me",
    //                 url: "https://pagar.me/sobre"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Ofertas",
    //         url: "https://pagar.me/ofertas",
    //         imageImported: "",
    //         imageName: "",
    //         type: "text",
    //         htmlType: "link"
    //     },
    //     {
    //         name: "Blog",
    //         url: "https://pagar.me/blog",
    //         imageImported: "",
    //         imageName: "",
    //         type: "text",
    //         htmlType: "link"
    //     },
    //     {
    //         name: "Dúvidas",
    //         url: "https://pagarme.helpjuice.com",
    //         imageImported: "",
    //         imageName: "",
    //         type: "text",
    //         htmlType: "link"
    //     },
    //     {
    //         name: "Suporte",
    //         url: "",
    //         imageImported: "",
    //         imageName: "",
    //         type: "text",
    //         htmlType: "dropdown",
    //         dropdown: [
    //             {
    //                 name: "Guias de integração",
    //                 url: "https://docs.pagar.me/page/guias-pagarme"
    //             },
    //             {
    //                 name: "Documentação",
    //                 url: "https://docs.pagar.me/"
    //             },
    //             {
    //                 name: "Boleto DDA",
    //                 url: "https://pagar.me/boletos"
    //             }
    //         ]
    //     }
    // ];
    const navBar = data["Header"]["NavBar"]
    const buttons = data["Header"]["Buttons"]

    return (
        <S.NavBarStyled>
            <S.LinksStyled>
                <ObjectRenderer objectToRender={navBar} isList={true} />
            </S.LinksStyled>

            <S.HeaderButtonsStyled>
                <ObjectRenderer objectToRender={buttons} isList={false} />
            </S.HeaderButtonsStyled>
        </S.NavBarStyled>
    )
}