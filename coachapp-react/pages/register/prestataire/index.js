import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import FormContainer from "@/components/formComponents/formContainer";
import PrestaContainter from "@/form/prestataire/prestaContainer";
import PrestaForm from "@/form/prestataire/prestaForm";

const inter = Inter({ subsets: ['latin'] })

export default function Prestataire() {
    return (
        <>
            <Head>
                <title>Prestataire inscription</title>
                <meta name="inscription prestataire" content="page d'enregistrement d'un prestataire" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className} ${styles.center}`}>
                <FormContainer
                    container={PrestaContainter}
                    form={PrestaForm}
                />
            </main>
        </>
    )
}
