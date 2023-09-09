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
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const onLogin = (username: string, password: string) => {
        alert(`username: ${username}, password: ${password}`);
    };
    return (
        <>
            <main>
                <Flex justifyContent="center" alignItems="center" height="80vh">
                    <LoginCard onLogin={onLogin} />
                </Flex>
            </main>
        </>
    );
}
