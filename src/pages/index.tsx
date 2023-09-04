import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Heading, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <main>
                <Text>Put content here next...</Text>
            </main>
        </>
    );
}
