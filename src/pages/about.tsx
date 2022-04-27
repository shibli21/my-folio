import AboutMe from "@/components/AboutMe";
import Layout from "@/components/layout";
import Timeline from "@/components/Timeline";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const resume = () => {
  return (
    <>
      <Head>
        <title>about | shibli</title>
      </Head>
      <Layout>
        <Box py={[4, 4, 10]}>
          <AboutMe />
          <Timeline />
        </Box>
      </Layout>
    </>
  );
};

export default resume;
