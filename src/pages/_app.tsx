import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import { Footer } from "@/components/Footer";
import theme from "../theme/theme";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
