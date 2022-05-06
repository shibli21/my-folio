import AboutMe from "@/components/AboutMe";
import { Container } from "@/components/Container";
import Layout from "@/components/layout";
import Timeline from "@/components/Timeline";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const resume = () => {
  return (
    <Container title="About - Syed Shibli Mahmud">
      <Head>
        <title>about | shibli</title>
      </Head>
      <Layout>
        <Box py={[4, 4, 10]}>
          <AboutMe />
          <Timeline />
        </Box>
      </Layout>
    </Container>
  );
};

export default resume;
