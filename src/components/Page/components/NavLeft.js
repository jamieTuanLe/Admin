import Image from "next/image";
import Link from "next/link";
import React, { useState} from "react";
import { useRouter } from "next/router";
import * as S from "../styles";
import { MenuData } from "../data";

const NavLeft = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <S.NavLeft className={isOpen ? "open" : ""}>
      <S.LogoWrapper>
        <S.Logo>
          <Link href="/" passHref>
            <S.LogoIcon>
              <Image src="/avatar.svg" alt="logo" width={40} height={40} />
              <S.LogoTitle>
                A<span className="main-color">d</span>min
              </S.LogoTitle>
            </S.LogoIcon>
          </Link>
        </S.Logo>
      </S.LogoWrapper>

      <S.MenuBody>
        <nav className="" >
          <ul className="menuData">
            {MenuData.map((item, idx) => {
              return (
                <li
                  className={
                    router.pathname == item.href || 
                    router.pathname.includes(item.href) && item.href !== "/"
                      ? "active"
                      : ""
                  }
                  key={idx}
                >
                  <Link href={item.href}>
                    <a>
                      <div className="icon">{item.icon}</div>{" "}
                      <div className="title">{item.title}</div>
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </S.MenuBody>
    </S.NavLeft>
  );
};

export default NavLeft;
