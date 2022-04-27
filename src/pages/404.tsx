import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | shibli</title>
      </Head>
      <Layout>
        <Flex justify="center" align="center" flexDir="column" h="60vh">
          <Text fontSize="8xl" fontWeight="bold" color="primary">
            404
          </Text>
          <Text mx="auto" maxW="500px" textAlign="center" my={10}>
            It seems you've found something that used to exist, or you spelled
            something wrong. I'm guessing you spelled something wrong. Can you
            double check that URL?
          </Text>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </Flex>
      </Layout>
    </>
  );
}
