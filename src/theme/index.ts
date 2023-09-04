import { extendTheme } from "@chakra-ui/react";
import fontStyling from "./fonts";

const theme = extendTheme({
    fonts: { ...fontStyling },
});

export default theme;
