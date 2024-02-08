interface Card {
  image: {
  path: string,
  alt: string,
  width: number,
  height: number, 
},
tittle: string,
text: string,
text2?: string,
bolder: string
}

interface Arrow {
  path: string,
  alt: string,
  width: number,
  height: number, 
}

export interface AdvantageCardsProps {
  cardsData: {
    cards: Card[]
    arrows: Arrow[]
  }
}