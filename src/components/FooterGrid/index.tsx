import { HTMLAttributes } from 'react';
import { Link } from '@/utils/interfaces/footerInterfaces';
import { GridItens } from '../GridItens'

import * as S from './styles'
import { AnchorProps } from '../Anchor';


export interface FooterGridData {
  [title: string]: AnchorProps[],
}

export interface FooterGridProps  {
 data: FooterGridData
}

export const FooterGrid = (data : FooterGridData) => {
  const jsonFooterTitle = Object.keys(data)
  
  return (
    < S.divWrapper>
      {
        jsonFooterTitle.map((title,i) =>(
          data[title as keyof FooterGridData]
          ? (<GridItens 
                key={i} 
                gridTitle={title} 
                data={data[title as keyof FooterGridData]} 
            />) 
          : null
        ))
      }
    </S.divWrapper>
  )
}
