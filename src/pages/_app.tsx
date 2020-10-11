import { ChakraProvider } from "@chakra-ui/core";
import { motion as Motion, AnimateSharedLayout } from "framer-motion";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader";
import theme from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {loading ? (
        <Motion.div
          transition={{ duration: 2, delay: 1 }}
          animate={{ opacity: 0 }}
        >
          <PreLoader />
        </Motion.div>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
};

export default MyApp;
