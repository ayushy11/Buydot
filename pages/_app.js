import "../styles/globals.css";
import { theme } from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import Layout from "../components/Layout";

// import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider theme={theme}>
        <Layout title="Buydot">
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
