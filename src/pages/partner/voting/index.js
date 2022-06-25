import React from "react";
import Page from "/src/components/Page";
import { ManageVoting } from "/src/modules";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


const VotingPage = () => {
  const { t } = useTranslation() //Function Translate
  return (
    <Page className="">
      <ManageVoting t={t}/>
    </Page>
  );
};

export default VotingPage;


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['manage-user']))
    }
  }
}