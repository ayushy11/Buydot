import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icon-file.png" />
      </Head>
      <Box>
        <header>Navbar</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </Box>
    </>
  );
};

export default Layout;
