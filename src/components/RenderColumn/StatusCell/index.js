import React from 'react'
import * as S from './styles'

const StatusCell = ({ value, options }) => {
  const option = options?.find((option) => value == option?.type)
  return (
    <S.Wrapper>
      <S.Status color={option?.color}>{option?.text}</S.Status>
    </S.Wrapper>
  )
}

export default StatusCell