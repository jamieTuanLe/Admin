import React from 'react'
import * as S from './styles'

const ButtonCell = ({config}) => {
  return (
    <S.ButtonCell>
      <S.Button
        onClick={() => {
          config.method();
        }}
      >
        {config.action}
      </S.Button>
    </S.ButtonCell>
  )
}

export default ButtonCell