import styles from '@/styles/Home.module.css';
import React from "react";
import Head from "next/head";
import { Inter } from 'next/font/google';
import PropTypes from "prop-types";
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })

export default function LoginForm({setEmail, setPassword, onSubmit, errors, formError}) {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="connexion" content="page de connexion" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className} ${styles.center}`}>
                <div className={styles.loginFormContainer}>
                    <div className={styles.formTitle}>Connexion</div>
                    <div className={styles.card}>
                        <form onSubmit={e => onSubmit(e)} className={`${styles.form}`}>
                            <span>{formError}</span>
                            <div className={styles.formComponent}>
                                <label htmlFor={"email"}>Email</label>
                                <input className={styles.formInput} onChange={e => setEmail(e.target.value)} id={"email"}
                                       type={"text"}/>
                                <span className="error">{errors["email"]}</span>
                            </div>

                            <div className={styles.formComponent}>
                                <label htmlFor={"password"}>Mot de passe</label>
                                <input className={styles.formInput} onChange={e => setPassword(e.target.value)} type={"password"}/>
                                <span className="error">{errors["password"]}</span>
                            </div>

                            <input className={styles.formButton} type="submit" value="Connexion"/>
                        </form>
                        <Link href={'/register'}>Inscription</Link>
                    </div>
                </div>
            </main>
        </>
    )
}

LoginForm.propTypes = {
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
    formError: PropTypes.string.isRequired
};