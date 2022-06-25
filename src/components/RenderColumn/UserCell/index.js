import React from 'react'
import Image from 'next/image';
import Avatar from '/public/images/avatar.png'
import * as S from './styles'

const UserCell = ({ options }) => {
  return (
    <>
      <S.TableUserWrapper>
        {options.hasOwnProperty('avatar') && (
          <S.Avatar>
            <Image src={options.avatar ? options.avatar : Avatar} width="45px" height="45px" alt="avatar" />
          </S.Avatar>
        )}
        <S.UserInfo>
          {options.hasOwnProperty('userName') && (
            <S.UserName>{options.userName}</S.UserName>
          )}
          <div>
            {options.hasOwnProperty('statusDot') && (
              <S.StatusDot status={options.statusDot}></S.StatusDot>
            )}
            {options.hasOwnProperty('status') && (
              <S.Status>{options.status}</S.Status>
            )}
            {options.hasOwnProperty('status') && (
              <S.UserId>{options.userId}</S.UserId>
            )}
          </div>
        </S.UserInfo>
      </S.TableUserWrapper>
    </>
  )
}

export default UserCell