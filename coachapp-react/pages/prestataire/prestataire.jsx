import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/UIComponents/navbar";
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export default function Prestataire({presta= {nom: "zae", img: "zeazezae"}, prestataires}) {
    console.log(prestataires)
    return (
        <>
            <Head>
                <title>Prestataire</title>
                <meta name="prestataire" content="page d'affichage d'un prestataire"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar />
                <div className={`${styles.center} ${styles.marginAuto}`}>
                </div>
                <div>
                    {presta && <div>Le nom {presta.nom} lien image {presta.img}</div>}
                    <table>
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
                </div>
            </main>
        </>
        )
}