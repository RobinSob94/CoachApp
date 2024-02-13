import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavbarContainer from "@/components/UIComponents/navbarContainer";
import { Inter } from 'next/font/google';
import PropTypes from "prop-types";
const inter = Inter({ subsets: ['latin'] })

export default function Reservation({equipier, action}) {
    
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
                        <th></th>
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
                            <th>9h / 10</th>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index} onClick={() => action(equipier.nom,9,jour)}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            <th>10h / 11h</th>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index} onClick={() => action(equipier.nom,10,jour)}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            <th>11h / 12h</th>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index} onClick={() => action(equipier.nom,11,jour)}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            <th>12h / 13h</th>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index} onClick={() => action(equipier.nom,12,jour)}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            <th>13h / 14h</th>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                            <td>Pause dejeuner</td>
                        </tr>
                        <tr>
                            <th>14h / 15h</th>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index} onClick={() => action(equipier.nom,14,jour)}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            <th>15h / 16h</th>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index} onClick={() => action(equipier.nom,15,jour)}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            <th>16h / 17h</th>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index} onClick={() => action(equipier.nom,16,jour)}>Dispo</td>
                            )}
                        </tr>
                        <tr>
                            <th>17h / 18h</th>
                            {equipier.jour_travail?.map((jour, index) => 
                             jour === null ? <td key={index}>Non disponible</td> : <td key={index} onClick={() => action(equipier.nom,17,jour)}>Dispo</td>
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