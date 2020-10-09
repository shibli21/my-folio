import { Text } from "@chakra-ui/core";
import Head from "next/head";
import React from "react";
import Logo from "../../public/logo.svg";
import { Container } from "../components/Container";

const Archive = () => {
  return (
    <>
      <Head>
        <title>archive</title>
        <link rel="icon" href={Logo} type="image/x-icon" />
      </Head>
      <Container>
        <Text fontSize="6xl" fontWeight="700">
          Archive
        </Text>
        <Text fontSize="xl">A big list of things I’ve worked on</Text>
        <></>
      </Container>
    </>
  );
};

export default Archive;
