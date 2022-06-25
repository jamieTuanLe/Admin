import React from "react";
import Page from "/src/components/Page";
import { AddVoting } from "/src/modules";
import { useRouter } from "next/router"


const VotingPage = () => {
  const router = useRouter()
  return (
    <Page className="">
      <AddVoting id={router.query.id} />
    </Page>
  );
};

export default VotingPage;