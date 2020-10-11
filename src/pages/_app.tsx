import { ChakraProvider } from "@chakra-ui/core";
import { motion as Motion } from "framer-motion";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader";
import theme from "../theme";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {router.pathname === "/" && loading ? (
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
