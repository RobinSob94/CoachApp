import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginForm from "@/form/login/loginForm";
import FormContainer from "@/components/formComponents/formContainer";
import LoginContainer from "@/form/login/loginContainer";

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
            <main className={`${styles.main} ${inter.className} ${styles.center}`}>
                <FormContainer
                    container={LoginContainer}
                    form={LoginForm}
                />
            </main>
        </>
    )
}
