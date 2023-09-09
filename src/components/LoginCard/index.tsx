import { Flex, Heading, Input, Button, Box, Text } from "@chakra-ui/react";
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";

interface LoginCardProps {
    onLogin: (username: string, password: string) => void;
}

enum InputType {
    USERNAME,
    PASSWORD,
}

// Use Yup or some validator.
const validate = (s: string): boolean => s.length > 0;

const LoginCard: FunctionComponent<LoginCardProps> = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const setVariable = (e: ChangeEvent<HTMLInputElement>, type: InputType) => {
        const newValue = e.target.value;
        switch (type) {
            case InputType.USERNAME:
                setUsername(newValue);
                break;
            case InputType.PASSWORD:
                setPassword(newValue);
                break;
            default:
                throw Error("Not username or password");
        }
    };

    useEffect(() => {
        const keyUpEvent = (e: KeyboardEvent) => {
            if (e.key === "Enter" && validate(username) && validate(password)) {
                onLogin(username, password);
            }
        };
        document.addEventListener("keyup", keyUpEvent);

        return () => {
            document.removeEventListener("keyup", keyUpEvent);
        };
    }, [onLogin, username, password]);

    return (
        <Box
            boxShadow="lg"
            p={20}
            border="2px"
            borderColor="lightBlue"
            rounded={10}
        >
            <Flex flexDir="column" alignItems="center">
                <Heading color="midnightBlue.500">Login</Heading>
                <Box my={8} minW={700}>
                    <Box my={4}>
                        <Text
                            mb={2}
                            fontWeight="400"
                            fontSize="xl"
                            color="midnightBlue.500"
                        >
                            Username
                        </Text>
                        <Input
                            value={username}
                            onChange={e => setVariable(e, InputType.USERNAME)}
                            borderColor="lightBlue"
                            width="100%"
                            size="lg"
                        />
                    </Box>
                    <Box my={8}>
                        <Text
                            fontFamily="Outfit"
                            fontWeight="400"
                            mb={2}
                            fontSize="xl"
                            color="midnightBlue.500"
                        >
                            Password
                        </Text>
                        <Input
                            value={password}
                            onChange={e => setVariable(e, InputType.PASSWORD)}
                            type="password"
                            borderColor="lightBlue"
                            width="100%"
                            size="lg"
                        />
                    </Box>
                    <Button
                        width="100%"
                        variant="light-square-desktop"
                        onClick={() => onLogin(username, password)}
                    >
                        Login
                    </Button>
                </Box>
                <Text variant="link" fontSize="lg">
                    Forgot Password?
                </Text>
            </Flex>
        </Box>
    );
};

export default LoginCard;
