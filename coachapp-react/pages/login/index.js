import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginForm from "@/form/login/loginForm";
import FormContainer from "@/components/formComponents/formContainer";
import LoginFormContainer from "@/form/login/loginContainer";
import EtablissementForm from "@/form/etablissement/etablissementForm";
import EtablissementContainer from "@/form/etablissement/etablissementContainer";
import EquipierFormContainer from "@/form/equipier/equipierFormContainer";
import EquipierForm from "@/form/equipier/equiperForm";
import PrestaForm from "@/form/prestataire/prestaForm";

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="connexion" content="page de connexion" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className} ${styles.center}`}>
                <FormContainer
                    container={LoginFormContainer}
                    form={LoginForm}
                />
            </main>
        </>
    )
}
