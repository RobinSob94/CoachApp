import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Inter } from 'next/font/google';
import Navbar from "@/components/UIComponents/navbar";
import useMonCompteController from "@/controller/moncompte/monCompteController";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Moncompte() {
    const {
        userInformations
    } = useMonCompteController()

    console.log(userInformations.nom)
    return (
        <>
            <Head>
                <title>Mon compte</title>
                <meta name="mon compte" content="page de compte personnel"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar/>
                <div className={`${styles.center} ${styles.moncompteUserInfo}`}>
                    <div>
                        <img src={"../../public/img.png"} alt={"Profile picture of user " + userInformations.pseudo} />
                        <div>
                            <table>
                                <tr>
                                    <td>Nom:</td>
                                    <td>{userInformations.nom}</td>
                                </tr>
                                <tr>
                                    <td>Prénom:</td>
                                    <td>{userInformations.prenom}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{userInformations.email}</td>
                                </tr>
                                <tr>
                                    <td>Pseudo:</td>
                                    <td>{userInformations.pseudo}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}