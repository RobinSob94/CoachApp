import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Navbar from "@/components/UIComponents/navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bienvenue</title>
        <meta name="bienvenue" content="page d'accueil de coach app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
          <Navbar />
        <div className={`${styles.center} ${styles.marginAuto}`}>
          Bienvenue sur coach app
        </div>
      </main>
    </>
  )
}
