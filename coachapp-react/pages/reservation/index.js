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

    console.log(equipiers)

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
                {equipiers !== null ? <div>HELLO</div> : <div>Waiting...</div>}
            </main>
        </>
    )
}