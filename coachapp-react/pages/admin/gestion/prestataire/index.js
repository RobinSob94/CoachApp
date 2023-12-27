import styles from '@/styles/Home.module.css'
import Head from "next/head";
import Navbar from "@/components/UIComponents/navbar";
import AdminNavbar from "@/components/UIComponents/adminNavbar";
import {Inter} from "next/font/google";
import useGestionRender from "@/controller/admin/gestion/useGestionRender";
import Link from "next/link";
import EtablissementForm from "@/form/etablissement/etablissementForm";
import PrestaForm from "@/form/prestataire/prestaForm";

const inter = Inter({ subsets: ['latin'] })
export default function GestionPrestataire() {
    const {
        setRender,
        render
    } = useGestionRender()


    return (
        <>
            <Head>
                <title>Gestion des données</title>
                <meta name="Administrateur/gestion" content="page admin/gestion"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className} ${styles.adminGestion}`}>
                <Navbar/>
                <AdminNavbar/>
                <div className={`${styles.center} ${styles.marginAuto} ${styles.centerFixed}`}>
                </div>
            <h2>Prestataire</h2>

            <div>
                <input className={styles.formButton} onClick={e => setRender("create")} type={"button"} value={"Créer"}/>
                <input className={styles.formButton} onClick={e => setRender("search")} type={"button"} value={"Chercher"}/>
                <Link href={"/admin/gestion"}>Retour</Link>
            </div>
                {render === "create" && <PrestaForm />}
                {render === "search" && <h3>Search</h3>}
            </main>
        </>
    )
}