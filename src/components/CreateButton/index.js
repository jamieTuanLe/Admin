import React, { memo } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

import FilePlus from '/public/svgs/file'
import * as S from './styles'

const CreateButton = ({ name }) => {
  const router = useRouter()
  return (
    <Link
      href={`${router.pathname}/add`}
      passHref
    >
      <S.CreateButton>
        <FilePlus />
        <S.NameButton>{name}</S.NameButton>
      </S.CreateButton>
    </Link>
  )
}

export default memo(CreateButton)