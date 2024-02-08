import * as S from "./styles"


import { AdvantageCards } from "../AdvantageCards"


const objectCardsData = {
  cards: [
    {
      image: {
        path: "/assets/images/cards/cardPayment.svg",
        alt: "Payment",
        width: 50,
        height: 38 
      },
      tittle: "Formas de pagamento online",
      text: "Aceite pagamentos por ",
      text2: "no seu site ou app.",
      bolder: "cartão de crédito (à vista e parcelado), boleto bancário e Pix, "
    },
    {
      image: {
        path: "/assets/images/cards/cardIntegration.svg",
        alt: "Payment",
        width: 50,
        height: 42 
      },
      tittle: "Integração Plug and Play",
      text: "Nossa solução tem fácil integração com as principais plataformas de e-commerce do Brasil.",
      bolder: " É só integrar e começar a vender!"
    },
    {
      image: {
        path: "/assets/images/cards/cardTechnology.svg",
        alt: "Payment",
        width: 50,
        height: 38 
      },
      tittle: "Estabilidade e tecnologia",
      text: "Tecnologia de ponta que processa ",
      text2: " garantindo alta estabilidade e performance para o seu negócio.",
      bolder: "centenas de transações por segundo,"
    },
    {
      image: {
        path: "/assets/images/cards/cardSecurity.svg",
        alt: "Payment",
        width: 34,
        height: 42 
      },
      tittle: "Segurança de ponta a ponta",
      text: "Somos certificados com o PCI DSS: ",
      text2: " mais reconhecido no mercado de pagamentos.",
      bolder: "o padrão internacional de segurança"
    },
  ],
  arrows: [
    {
      path:"/assets/images/cards/leftArrow.svg",
      alt: "Left Arrow",
      width: 25,
      height: 25, 
    },
    {
      path: "/assets/images/cards/rightArrow.svg",
      alt: "Right Arrow",
      width: 25,
      height: 25,
    }
  ]
}


export const Cards = () => {
  
  return (
  <S.Container> 
    <AdvantageCards cardsData={objectCardsData}/>
  </S.Container>

  )
}