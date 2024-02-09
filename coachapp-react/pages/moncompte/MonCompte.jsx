import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/UIComponents/navbar";
import UserInfo from "@/components/UIComponents/userInfo";
import ChangeUserInfoForm from "@/form/user/changeUserInfo";
import { Inter } from 'next/font/google';
import React from "react";
const inter = Inter({ subsets: ['latin'] })
export default function MonCompte({userInformations, resetPassword, userForm, seeUserForm}) {
    return (
        <>
            <Head>
                <title>Mon compte</title>
                <meta name="mon compte" content="page de compte personnel"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className} ${styles.moncompte}`}>
                <Navbar/>
                <div className={`${styles.center} ${styles.centerFixed}`}></div>
                <div className={styles.moncompteUserInfo}>
                    <UserInfo
                        nom={userInformations.nom}
                        pseudo={userInformations.pseudo}
                        prenom={userInformations.prenom}
                        email={userInformations.email}
                        image={userInformations.image}
                        role={userInformations.role} />
                    <button className={styles.resetPasswordButton} onClick={resetPassword}>Reset Password</button>
                    <button className={styles.resetPasswordButton} onClick={userForm}>Change user info</button>
                </div>

                {seeUserForm && <ChangeUserInfoForm userInfo={userInformations}/>}
            </main>
        </>
    )
}