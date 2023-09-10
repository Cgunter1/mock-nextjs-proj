import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
    Box,
    Button,
    Card,
    Flex,
    Heading,
    Input,
    Text,
} from "@chakra-ui/react";
import LoginCard from "../components/LoginCard";
import { useEffect, useState } from "react";
import { useUserContext, USER_STATES } from "../hooks/useUser";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const { user, userDispatch } = useUserContext();
    const router = useRouter();

    const onLogin = (username: string, password: string, org: string) => {
        // TODO: Integrate in a more believable way.
        userDispatch({ user: { username }, type: USER_STATES.SIGN_IN });
        router.push("dashboards/user");
    };

    const onSignUp = () => {
        alert("Go to sign up page");
    };

    const onForgotPassword = () => {
        alert("Go to forgot password page");
    };

    useEffect(() => {
        console.log(user);
    }, [user]);
    return (
        <>
            <main>
                <Flex justifyContent="center" alignItems="center" mt={8}>
                    <LoginCard
                        onLogin={onLogin}
                        onSignUp={onSignUp}
                        onForgotPassword={onForgotPassword}
                    />
                </Flex>
            </main>
        </>
    );
}
