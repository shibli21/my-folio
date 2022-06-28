import { Container } from "@/components/Container";
import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container title="404 – Syed Shibli Mahmud">
      <Flex justify="center" align="center" flexDir="column" h="60vh">
        <Text fontSize="8xl" fontWeight="bold" color="primary">
          404
        </Text>
        <Text mx="auto" maxW="500px" textAlign="center" my={10}>
          It seems you&apos;ve found something that used to exist, or you
          spelled something wrong. I&apos;m guessing you spelled something
          wrong. Can you double check that URL?
        </Text>
        <Link href="/" passHref>
          <Button>Return Home</Button>
        </Link>
      </Flex>
    </Container>
  );
}