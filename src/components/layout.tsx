import React, { FunctionComponent } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import NavBar from "./NavBar";

/**
 * Layout which surounds every component
 */

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Flex direction="column" h="100vh" w="100%">
    <NavBar />
    <Flex direction="column" flex={1}>
      <Container maxW="container.lg" my={10}>
        <main>{children}</main>
      </Container>
    </Flex>
    <Footer />
  </Flex>
);

export default Layout;
