import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginForm from "@/pages/login/loginForm";

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Coach app's login page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <LoginForm />
            </main>
        </>
    )
}
