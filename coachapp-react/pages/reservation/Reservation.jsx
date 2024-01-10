import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/UIComponents/navbar";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Reservation({equipiers}) {
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
                            <tr key={equipier.id}>
                                <td style={{border: "1px white solid"}}>{equipier.id}</td>
                                <td style={{border: "1px white solid"}}>{equipier.nom}</td>
                                <td style={{border: "1px white solid"}}>{equipier.jour_travail}</td></tr>)
                        :
                        <tr>
                            <td>Waiting...</td>
                            <td>Waiting...</td>
                            <td>Waiting...</td>
                        </tr>}
                    </tbody>
                </table>
            </main>
        </>
    )
}