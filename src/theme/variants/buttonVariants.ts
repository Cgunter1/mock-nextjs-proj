import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import colorStyling from "../colors";

const { light: lightShadow } = colorStyling.shadowColor;

const ButtonVariants = {
    Button: {
        // 1. We can update the base styles
        baseStyle: {
            fontWeight: "bold", // Normally, it is "semibold"
        },
        // 2. We can add a new button size or extend existing
        sizes: {
            xl: {
                h: "56px",
                fontSize: "lg",
                px: "32px",
            },
        },
        // 3. We can add a new visual variant
        variants: {
            "sm-rounded-desktop": {
                _hover: {
                    bg: "lightBlue.700",
                },
                bg: "lightBlue.500",
                boxShadow: `0 0 2px 2px ${lightShadow}`,
                py: 7,
                px: 14,
                borderRadius: 50,
                fontSize: 20,
            },
            "light-square-desktop": {
                _hover: {
                    bg: "lightBlue.700",
                },
                bg: "lightBlue.500",
                boxShadow: `0 0 2px 2px ${lightShadow}`,
                py: 7,
                px: 14,
                borderRadius: 10,
                color: "white",
                fontSize: "xl",
            },
            // 4. We can override existing variants
            // solid: (props: StyleFunctionProps) => ({
            //   bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
            // }),
            // 5. We can add responsive variants
            // sm: {
            //   bg: 'teal.500',
            //   fontSize: 'md',
            // },
        },
    },
};

export default ButtonVariants;
