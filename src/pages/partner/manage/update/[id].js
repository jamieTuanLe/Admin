import React from "react";
import Page from "/src/components/Page";
import { AddPartner } from "/src/modules";
import { useRouter } from "next/router"


const PartnerPage = () => {
  const router = useRouter()
  return (
    <Page className="">
      <AddPartner id={router.query.id} />
    </Page>
  );
};

export default PartnerPage;