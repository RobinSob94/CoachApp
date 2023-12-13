import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Inter } from 'next/font/google';
import Navbar from "@/components/UIComponents/navbar";
import AdminNavbar from "@/components/UIComponents/adminNavbar";

const inter = Inter({ subsets: ['latin'] })

export default function Admin() {
    return (
        <>
            <Head>
                <title>ADMIN</title>
                <meta name="Administrateur/gestion" content="page admin/gestion"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar/>
                <AdminNavbar/>
                <div className={`${styles.center} ${styles.marginAuto}`}>
                    GESTION
                </div>
            </main>
        </>
    )
}