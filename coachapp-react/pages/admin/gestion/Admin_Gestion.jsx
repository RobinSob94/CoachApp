import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Inter } from 'next/font/google';
import NavbarContainer from "@/components/UIComponents/navbarContainer";
import AdminNavbar from "@/components/UIComponents/adminNavbar";
import React from "react";

const inter = Inter({ subsets: ['latin'] })


export default function Admin_Gestion() {
    return (
        <>
            <Head>
                <title>Gestion des données</title>
                <meta name="Administrateur/gestion" content="page admin/gestion"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className} ${styles.adminGestion}`}>
                <NavbarContainer/>
                <AdminNavbar/>
                <div className={`${styles.center} ${styles.marginAuto} ${styles.centerFixed}`}>
                </div>
                <Link className={styles.formButton} href={"/admin/gestion/user"}>Utilisateur</Link>
                <Link className={styles.formButton} href={"/admin/gestion/prestataire"}>Prestataire</Link>
                <Link className={styles.formButton} href={"/admin/gestion/etablissement"}>Etablissement</Link>
                <Link className={styles.formButton} href={"/admin/gestion/equipier"}>Equipiers</Link>
            </main>
        </>
    )
}