import React from 'react'
import { formatDateTime } from "/src/utils";

import * as S from './styles'


const TimeCell = ({options}) => {
  return (
    <>
      {options.hasOwnProperty('day') && (
        <S.DayOff>{options.day}</S.DayOff>
      )}
    </>
  )
}

export default TimeCell