import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Inter } from 'next/font/google';
import AdminNavbar from "@/components/UIComponents/adminNavbar";

import React from "react";
import NavbarContainer from "@/components/UIComponents/navbarContainer";
const inter = Inter({ subsets: ['latin'] })

export default function Admin() {


    return (
        <>
            <Head>
                <title>Administrateur</title>
                <meta name="admin" content="page d'administration"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <NavbarContainer />
                <AdminNavbar/>
                <div className={`${styles.center} ${styles.marginAuto}`}>
                    ADMIN
                </div>
            </main>
        </>
    )
}