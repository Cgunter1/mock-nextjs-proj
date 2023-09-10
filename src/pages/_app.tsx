import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../theme";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/200.css";
import "@fontsource/outfit/100.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserProvider } from "../hooks/useUser";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <UserProvider>
                <Flex
                    direction="column"
                    h="100vh"
                    justifyContent="space-between"
                >
                    <NavBar>
                        <Component {...pageProps} />
                    </NavBar>
                    <Footer />
                </Flex>
            </UserProvider>
        </ChakraProvider>
    );
}
