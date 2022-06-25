import React from 'react'
import Image from 'next/image'
import { formatDateTime } from '/src/utils'
import * as S from './styles'

const ECOTokenCell = ({ options }) => {
  return (
    <>
      <S.CellWrapper>
        <S.Token>
          {options.hasOwnProperty('tokenIcon') && (
            <S.TokenIcon>
              <Image src={options.tokenIcon ? options.tokenIcon : "/images/icons/eco-coin.png"} width="16px" height="16px" alt="" />
            </S.TokenIcon>
          )}
          {options.hasOwnProperty('amountToken') && (
            <S.Amount>{options.amountToken} ECO</S.Amount>
          )}
        </S.Token>
        {options.hasOwnProperty('time') && (
          <S.Time>in {formatDateTime(options.time, "MM.DD.YYYY")}</S.Time>
        )}
      </S.CellWrapper>
    </>
  )
}

export default ECOTokenCell