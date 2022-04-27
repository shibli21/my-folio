import { Container } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Footer } from "./Footer";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";

/**
 * Layout which surounds every component
 */

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
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
