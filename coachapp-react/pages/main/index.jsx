import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/UIComponents/navbar";
import React from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Bienvenue</title>
                <meta name="main page" content="page principale de Coach App"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar/>
                <div className={`${styles.center} ${styles.marginAuto}`}>
                    MAIN PAGE
                </div>
            </main>
        </>
    )
}
