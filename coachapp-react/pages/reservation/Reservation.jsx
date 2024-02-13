import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavbarContainer from "@/components/UIComponents/navbarContainer";
import { Inter } from 'next/font/google';
import PropTypes from "prop-types";
const inter = Inter({ subsets: ['latin'] })

export default function Reservation({equipier}) {
    
    return (
        <>
            <Head>
                <title>Réservations</title>
                <meta name="reserver" content="page de réservation client"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <NavbarContainer />
                <div className={`${styles.center} ${styles.marginAuto}`}>
                </div>
                <table className={styles.reservationTab}>
                    <caption>Planning de la semaine de : {equipier.nom}</caption>
                    <thead>
                    <tr>
                        <th>
                            Lundi
                        </th>
                        <th>
                            Mardi
                        </th>
                        <th>
                            Marcredi
                        </th>
                        <th>
                            Jeudi
                        </th>
                        <th>
                            Vendredi
                        </th>
                        <th>
                            Samedi
                        </th>
                        <th>
                            Dimanche
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                        </tr>
                        <tr>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index}>Dispo</td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </main>
        </>
    )
}

Reservation.propTypes = {
    equipier: PropTypes.object.isRequired,
};