import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";

const NavBar: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <Box>
            <Box boxShadow="md" py={4}>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    as="nav"
                    mx={4}
                    pt={2}
                >
                    <Flex alignItems="center">
                        <SearchIcon
                            p={2}
                            boxSize={10}
                            mr={2}
                            bgColor="blue.600"
                            color="white"
                            rounded="100%"
                        />
                        <Heading data-testid="title">
                            Lost &amp; found Items
                        </Heading>
                    </Flex>

                    <Button bgColor="blue.400" p={3} rounded={10}>
                        <Text color="white">Login</Text>
                    </Button>
                </Flex>
            </Box>
            {children}
        </Box>
    );
};

export default NavBar;
