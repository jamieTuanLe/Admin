import React from 'react'
import * as S from './styles'

const ShareCell = ({value}) => {
  return (
    <S.ShareCell>
      <S.Total>{value}</S.Total>
      <S.Line percent={value} />
    </S.ShareCell>
  )
}

export default ShareCell