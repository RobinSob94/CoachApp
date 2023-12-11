import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Inter } from 'next/font/google';
import Navbar from "@/components/UIComponents/navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Moncompte() {
    return (
        <>
            <Head>
                <title>Mon compte</title>
                <meta name="mon compte" content="page de compte personnel"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar/>
                <div className={`${styles.center} ${styles.marginAuto}`}>
                    COMPTES
                </div>
            </main>
        </>
    )
}