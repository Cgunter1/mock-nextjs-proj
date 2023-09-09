import { Flex, Heading, Input, Button, Box, Text } from "@chakra-ui/react";
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";

interface LoginCardProps {
    onLogin: (email: string, password: string, org: string) => void;
    onSignUp: () => void;
    onForgotPassword: () => void;
}

enum InputType {
    EMAIL,
    PASSWORD,
    ORG,
}

// Use Yup or some validator.
const validate = (s: string): boolean => s.length > 0;

const LoginCard: FunctionComponent<LoginCardProps> = ({
    onLogin,
    onSignUp,
    onForgotPassword,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [org, setOrg] = useState("");

    const setVariable = (e: ChangeEvent<HTMLInputElement>, type: InputType) => {
        const newValue = e.target.value;
        switch (type) {
            case InputType.EMAIL:
                setEmail(newValue);
                break;
            case InputType.PASSWORD:
                setPassword(newValue);
                break;
            case InputType.ORG:
                setOrg(newValue);
                break;
            default:
                throw Error("Not username or password");
        }
    };

    useEffect(() => {
        const keyUpEvent = (e: KeyboardEvent) => {
            if (
                e.key === "Enter" &&
                validate(email) &&
                validate(password) &&
                validate(org)
            ) {
                onLogin(email, password, org);
            }
        };
        document.addEventListener("keyup", keyUpEvent);

        return () => {
            document.removeEventListener("keyup", keyUpEvent);
        };
    }, [onLogin, email, password, org]);

    const isDisabled = !(
        validate(email) &&
        validate(password) &&
        validate(org)
    );

    return (
        <Box
            boxShadow="lg"
            p={12}
            border="2px"
            borderColor="lightBlue"
            rounded={10}
        >
            <Flex flexDir="column" alignItems="center">
                <Heading color="midnightBlue.500">Login</Heading>
                <Box my={2} minW={500}>
                    <Box my={4}>
                        <Text
                            mb={2}
                            fontWeight="400"
                            fontSize="xl"
                            color="midnightBlue.500"
                        >
                            Email
                        </Text>
                        <Input
                            value={email}
                            onChange={e => setVariable(e, InputType.EMAIL)}
                            borderColor="lightBlue"
                            width="100%"
                            size="lg"
                            data-testid="emailInput"
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
                            data-testid="passwordInput"
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
                            Organization
                        </Text>
                        <Input
                            value={org}
                            onChange={e => setVariable(e, InputType.ORG)}
                            borderColor="lightBlue"
                            width="100%"
                            size="lg"
                            data-testid="orgInput"
                        />
                    </Box>
                    <Button
                        disabled={isDisabled}
                        width="100%"
                        data-testid="loginButton"
                        variant={
                            isDisabled ? "disabled" : "light-square-desktop"
                        }
                        onClick={() =>
                            validate(email) &&
                            validate(password) &&
                            validate(org) &&
                            onLogin(email, password, org)
                        }
                    >
                        Login
                    </Button>
                </Box>
                <Text
                    variant="link"
                    fontSize="lg"
                    data-testid="forgotPasswordLink"
                    onClick={onForgotPassword}
                >
                    Forgot Password?
                </Text>
                <Text fontSize="lg" mt={4} mb={2}>
                    Don&apos;t have an account?
                </Text>
                <Button
                    data-testid="signUpButton"
                    width="40%"
                    variant="light-square-desktop"
                    onClick={onSignUp}
                >
                    Sign Up
                </Button>
            </Flex>
        </Box>
    );
};

export default LoginCard;
