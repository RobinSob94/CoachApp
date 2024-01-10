import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Inter } from 'next/font/google';
import Navbar from "@/components/UIComponents/navbar";
import useReservationController from "@/controller/reservation/useReservationController";
import {log} from "next/dist/server/typescript/utils";


const inter = Inter({ subsets: ['latin'] })

export default function Reservation({id_Hebergement = 0}) {
    const {
        service,
        setService,
        dateHoraire,
        setDateHoraire,
        equipiers,
    } = useReservationController()
    return (
        <>
            <Head>
                <title>Réservations</title>
                <meta name="reserver" content="page de réservation client"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar />
                <div className={`${styles.center} ${styles.marginAuto}`}>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Id
                            </td>
                            <td>
                                Nom
                            </td>
                            <td>
                                Jours travail
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {equipiers !== null ?
                            equipiers.map(equipier =>
                                <div key={equipier.id}>
                                    <div style={{border: "1px white solid"}}>{equipier.id}</div>
                                    <div style={{border: "1px white solid"}}>{equipier.nom}</div>
                                    <div style={{border: "1px white solid"}}>{equipier.jour_travail}</div></div>): <div>Waiting...</div>}
                    </tbody>
                </table>
            </main>
        </>
    )
}