import { Flex, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => (
    <Flex backgroundColor="midnightBlue.500" py={4} justifyContent="center">
        <Text color="white" fontSize="2xl">
            Lost & Found &copy;2023
        </Text>
    </Flex>
);

export default Footer;
