import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import { Footer } from "../components/Footer";
import theme from "../theme/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
