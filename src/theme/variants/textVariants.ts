const TextVariants = {
    Text: {
        variants: {
            link: {
                color: "lightBlue.500",
                textDecoration: "underline",
                _hover: {
                    color: "lightBlue.700",
                },
                cursor: "pointer",
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

export default TextVariants;
