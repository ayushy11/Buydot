import "../styles/globals.css";
import { theme } from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";

// import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
