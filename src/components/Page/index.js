import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import NavLeft from "./components/NavLeft";
import * as S from "./styles";

const Page = ({ children, mainClassName }) => {

  return (
    <S.PageWrapper>
      <Head>
        <title>Admin</title>
      </Head>

      <NavLeft />

      <S.Right>
        <Header />
        <S.Main className={mainClassName} exit={{ opacity: 0 }}>
          {children}
        </S.Main>
      </S.Right>
    </S.PageWrapper>
  );
};

export default Page;
