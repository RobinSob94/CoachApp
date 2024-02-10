import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Inter } from 'next/fonts/google'; // Correct the import path

export default function Admin() {
    const inter = Inter({ subsets: ['latin'] }); // Create an instance of Inter font

    return (
        <>
            <Head>
                <title>Administrateur</title>
                <meta name="admin" content="page d'administration"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={`${styles.center} ${styles.marginAuto}`}>
                    ADMIN
                </div>
            </main>
        </>
    )
}
