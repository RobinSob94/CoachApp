import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Inter } from 'next/font/google';
import AdminNavbar from "@/components/UIComponents/adminNavbar";
import Navbar from "@/components/UIComponents/navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Admin() {
    return (
        <>
            <Head>
                <title>Mon compte</title>
                <meta name="mon compte" content="page de compte personnel"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar />
                <AdminNavbar/>
                <div className={`${styles.center} ${styles.marginAuto}`}>
                    ADMIN
                </div>
            </main>
        </>
    )
}