import React from 'react'
import Image from 'next/image'
import * as S from './styles'

const FeedCell = ({options, config}) => {
  return (
    <>
      <S.FeedCell>
        <S.Image>
          <Image src={options.thumbnail} alt="thumbnal" width={config.size} height={config.size} layout="fixed" />
        </S.Image>
        <S.Title>
          {options.title}
        </S.Title>
      </S.FeedCell>
    </>
  )
}

export default FeedCell