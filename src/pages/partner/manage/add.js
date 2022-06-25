import React from "react";
import Page from "/src/components/Page";
import { AddPartner } from "/src/modules";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


const PartnerPage = () => {
  const { t } = useTranslation() //Function Translate
  return (
    <Page className="">
      <AddPartner t={t}/>
    </Page>
  );
};

export default PartnerPage;


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['manage-user']))
    }
  }
}