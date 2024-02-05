import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import RegisterForm from "@/form/registration/registerForm";
import FormContainer from "@/components/formComponents/formContainer";
import RegistrationContainer from "@/form/registration/registrationContainer";

const inter = Inter({ subsets: ['latin'] })

export default function Register() {
    return (
        <>
            <Head>
                <title>Regiter</title>
                <meta name="inscription" content="page d'inscription" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className} ${styles.center}`}>
                <FormContainer
                    container={RegistrationContainer}
                    form={RegisterForm}
                />
            </main>
        </>
    )
}
