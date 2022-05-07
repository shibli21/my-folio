import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import HamMenu from "./HamMenu";
import SocialContacts from "./SocialContact";

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box display={["flex", "none"]}>
        <HamMenu
          onClick={() => (isOpen ? onClose() : onOpen())}
          isOpen={isOpen}
          lineProps={{
            stroke: useColorModeValue(isOpen ? "white" : "black", "white"),
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          style={{ marginLeft: "2rem", zIndex: 999999 }}
        />
      </Box>

      <Box display={isOpen ? "flex" : "none"}>
        <Box
          zIndex="modal"
          bg="text.primary"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          pos="fixed"
          pointerEvents={!isOpen ? "none" : "auto"}
        >
          <Box>
            <Box bg="primary" p={4}>
              <HStack alignItems="flex-start">
                <Heading
                  letterSpacing={0.2}
                  lineHeight={1}
                  mt="5px"
                  pr="40px"
                  color="white"
                >
                  Syed Shibli Mahmud
                </Heading>
              </HStack>
              <Box color="white">
                <SocialContacts />
              </Box>
            </Box>

            <Container pt={10}>
              <Stack spacing={4} color="white">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
              </Stack>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
