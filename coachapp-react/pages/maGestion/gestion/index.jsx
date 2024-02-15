import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavbarContainer from "@/components/UIComponents/navbarContainer";
import AdminNavbar from "@/components/UIComponents/adminNavbar";
import Link from "next/link";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function GestionPrestataire() {

    return (
    //     TODO: Ajouter le header et les navbar.
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
                <Link className={styles.formButton} href={"/maGestion/gestion/equipiers"}>Equipiers</Link>
                <Link className={styles.formButton} href={"/maGestion/gestion/etablissements"}>Etablissements</Link>
                <Link className={styles.formButton} href={"/maGestion/gestion/services"}>Services</Link>
            </main>
        </>
    )
}