import React from 'react'
import { formatDateTime } from "/src/utils";

import * as S from './styles'


const TimeCell = ({options}) => {
  return (
    <>
      {options.hasOwnProperty('day') && (
        <S.DayOff>{formatDateTime(options.day)}</S.DayOff>
      )}
      {options.hasOwnProperty('hour') && (
        <S.TimeOff>{formatDateTime(options.hour, "h:mm A")}</S.TimeOff>
      )}
      {options.hasOwnProperty('more') && (
        <S.More>{options.more}</S.More>
      )}
    </>
  )
}

export default TimeCell