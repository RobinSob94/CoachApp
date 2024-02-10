import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavbarContainer from "@/components/UIComponents/navbarContainer";
import AdminNavbar from "@/components/UIComponents/adminNavbar";
import Link from "next/link";
import EquipierForm from "@/form/equipier/equiperForm";
import {Inter} from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function GestionEquipier({render, setRender}) {

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
                <h2>Equipier</h2>

                <div>
                    <input className={styles.formButton} onClick={e => setRender("create")} type={"button"} value={"Créer"}/>
                    <input className={styles.formButton} onClick={e => setRender("search")} type={"button"} value={"Chercher"}/>
                    <Link href={"/admin/gestion"}>Retour</Link>
                </div>
                {render === "create" && <EquipierForm admin={true} />}
                {render === "search" && <h3>Search</h3>}
            </main>
        </>
    )
}