import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavbarContainer from "@/components/UIComponents/navbarContainer";
import { Inter } from 'next/font/google';
import PropTypes from "prop-types";
import PrestaNavbar from "@/components/UIComponents/prestaNavbar";


const inter = Inter({ subsets: ['latin'] })

export default function Prestataire({presta, prestataires = null, isPresta = false}) {
    return (
        <>
            <Head>
                <title>Prestataire</title>
                <meta name="prestataire" content="page d'affichage d'un prestataire"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <NavbarContainer />
                {isPresta && <PrestaNavbar />}
                <div className={`${styles.center} ${styles.marginAuto}`}>
                </div>
                <div className={styles.prestaInfo}>
                    {presta && <div>Le nom {presta.nom} lien image {presta.img}</div>}
                    {prestataires &&
                    <table className={styles.reservationTab}>
                        <thead>
                        <tr>
                            <td>Le nom </td>
                            <td>Le lien image </td>
                        </tr>
                        </thead>
                        <tbody>
                        {prestataires && prestataires.map(prestaUnique => <tr key={prestaUnique.id}><td>{prestaUnique.nom}</td><td>{prestaUnique.img}</td></tr>)}
                        </tbody>
                    </table>
                    }
                </div>
            </main>
        </>
        )
}

Prestataire.propTypes = {
    presta: PropTypes.string.isRequired,
    prestataires: PropTypes.string.isRequired,
  };