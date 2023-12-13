import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Inter } from 'next/font/google';
import Navbar from "@/components/UIComponents/navbar";


const inter = Inter({ subsets: ['latin'] })

export default function Prestataire() {
    return (
        <>
            <Head>
                <title>Prestataire</title>
                <meta name="prestataire" content="page d'affichage d'un prestataire"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar />
                <div className={`${styles.center} ${styles.marginAuto}`}>
                    PRESTATAIRE
                </div>
            </main>
        </>
    )
}