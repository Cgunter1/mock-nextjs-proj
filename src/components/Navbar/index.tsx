import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text, useTheme } from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";

const NavBar: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();
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
                        <Heading data-testid="title" color="midnightBlue.500">
                            Lost &amp; found Items
                        </Heading>
                    </Flex>

                    <Button
                        bgColor={theme.lightBlue}
                        variant="sm-rounded-desktop"
                    >
                        <Text color="white">Login</Text>
                    </Button>
                </Flex>
            </Box>
            {children}
        </Box>
    );
};

export default NavBar;
