import React from 'react'

import * as S from "./styles"

const STTCell = ({ row }) => {

  return (
    <>
      <S.STTBox>{row.index + 1}</S.STTBox>
    </>
  )
}

export default STTCell