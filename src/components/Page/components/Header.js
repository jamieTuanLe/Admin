import React from 'react';
import Image from "next/image";
import { useRouter } from "next/router";
import { MenuData } from '/src/components/Page/data'
import * as S from "../styles";

const Header = () => {
  const router = useRouter();
  return (
    <S.Header>
      <div className="custom-header">
        <S.BreadCrumb>{`Trang chủ / ${MenuData.find((item) => router.pathname == item.href || router.pathname.includes(item.href) && item.href !== "/") ? 
        MenuData.find((item) => router.pathname == item.href || router.pathname.includes(item.href) && item.href !== "/")?.breadCrumb : ""}`}</S.BreadCrumb>
      </div>

      <div className="left">
        <S.SearchHeader>
          <S.SearchIcon>
            <Image
              src="/images/icons/search-icon.png"
              alt="search"
              width="15px"
              height="15px"
            />
          </S.SearchIcon>
          <input
            type="text"
            placeholder="Search"
            value=""
            onChange={() => {}}
          />
        </S.SearchHeader>
        <S.Icon>
          <Image
            src="/images/icons/noti.png"
            alt="noti"
            width={18}
            height={24}
          />
        </S.Icon>

        <div className="avatar" id="profile">
          Admin
          <Image src="/avatar.svg" alt="avatar" width={40} height={40} />
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
