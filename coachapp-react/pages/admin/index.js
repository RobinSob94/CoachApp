import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Admin() {
    return (
        <>
            <Head>
            <title>Admin</title>
                <meta name="admin" content="page admin" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={`${styles.description} ${styles.card}`}>
                    <Link href='#'>
                        Gestion
                    </Link>
                    <Link href='#'>
                        Dashboard
                    </Link>
                    <Link href='#'>
                        Déconnexion
                    </Link>
                </div>

                <div className={`${styles.center} ${styles.marginAuto}`}>
                    Bienvenue sur coach app
                </div>
            </main>
        </>
    )
}