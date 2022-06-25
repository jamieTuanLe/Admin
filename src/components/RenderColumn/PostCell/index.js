import React from 'react'
import Image from 'next/image'
import * as S from './styles'

const PostCell = ({options, config}) => {
  return (
    <>
      <S.PostCell config={config}>
        <S.Image config={config}>
          <Image src={options.thumbnail} alt="thumbnal" layout="fill" />
        </S.Image>
        <S.Title>
          {options.title}
        </S.Title>
      </S.PostCell>
    </>
  )
}

export default PostCell