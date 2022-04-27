import { Container } from "@chakra-ui/react";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { Footer } from "./Footer";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";

interface LayoutProps {}

const Layout: FunctionComponent<PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  return (
    <>
      <NavBar />
      <Container maxW="container.lg">
        <SocialIcons />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
