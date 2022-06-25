import React from 'react'

import * as S from "./styles"

const SliceTextCell = ({ value, startSlice = 0, endSlice }) => {
  return (
    <>
      <S.SliceWrapper>
        {`${value?.slice(startSlice, endSlice)}...`}
      </S.SliceWrapper>
    </>
  )
}

export default SliceTextCell