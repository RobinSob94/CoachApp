import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavbarContainer from "@/components/UIComponents/navbarContainer";
import AdminNavbar from "@/components/UIComponents/adminNavbar";
import Link from "next/link";
import EtablissementForm from "@/form/etablissement/etablissementForm";
import {Inter} from "next/font/google";
import PropTypes from "prop-types";
import PrestaNavbar from "@/components/UIComponents/prestaNavbar";
const inter = Inter({ subsets: ['latin'] })

export default function GestionEtablissement({render, setRender, retour = 'admin/gestion', isAdmin = false, isPresta = false}) {
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
                {isAdmin && <AdminNavbar />}
                {isPresta && <PrestaNavbar />}
                <div className={`${styles.center} ${styles.marginAuto} ${styles.centerFixed}`}>
                </div>
                <h2>Etablissement</h2>

                <div>
                    <input className={styles.formButton} onClick={e => {e.preventDefault(); setRender("create")}} type={"button"} value={"Créer"}/>
                    <input className={styles.formButton} onClick={e => {e.preventDefault(); setRender("search")}} type={"button"} value={"Chercher"}/>
                    <Link href={"/admin/gestion"}>Retour</Link>
                </div>
                {render === "create" && <EtablissementForm />}
                {render === "search" && <h3>Search</h3>}
            </main>
        </>
    )
}

GestionEtablissement.propTypes = {
    render: PropTypes.string.isRequired,
    setRender: PropTypes.func.isRequired,
};