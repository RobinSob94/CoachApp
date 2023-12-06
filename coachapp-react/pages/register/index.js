import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import RegisterForm from "@/pages/register/registerForm";

const inter = Inter({ subsets: ['latin'] })

export default function Register() {
    return (
        <>
            <Head>
                <title>Regiter</title>
                <meta name="description" content="Coach app's register page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <RegisterForm />
            </main>
        </>
    )
}
