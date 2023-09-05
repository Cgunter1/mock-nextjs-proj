import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../theme";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/200.css";
import "@fontsource/outfit/100.css";
import NavBar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <NavBar>
                <Component {...pageProps} />
            </NavBar>
        </ChakraProvider>
    );
}
