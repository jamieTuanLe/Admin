import React from 'react'
import { useSelector } from "react-redux"

import * as S from "./styles"

const STTCell = ({ row, selectState}) => {
  const list = useSelector(selectState);
  const { pagination } = list;
  return (
    <>
      <S.STTBox>{row.index + 1 + pagination?.page * pagination?.limit}</S.STTBox>
    </>
  )
}

export default STTCell