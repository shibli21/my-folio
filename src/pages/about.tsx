import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import Timeline from "@/components/Timeline";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>about | shibli</title>
      </Head>
      <Container>
        <Main>
          <Box>
            <Box mt={6} cursor="pointer" display="inline-block">
              <FaArrowLeft onClick={() => history.back()} />
            </Box>
            <Timeline />
          </Box>
        </Main>
      </Container>
    </>
  );
};

export default resume;
