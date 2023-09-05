import { extendTheme } from "@chakra-ui/react";
import fontStyling from "./fonts";
import colorStyling from "./colors";
import ButtonVariants from "./variants/buttonVariants";
import TextVariants from "./variants/textVariants";

const theme = extendTheme({
    fonts: { ...fontStyling },
    colors: { ...colorStyling },
    borderColors: { ...colorStyling },
    components: {
        ...ButtonVariants,
        ...TextVariants,
    },
});

export default theme;
