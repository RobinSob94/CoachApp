import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

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
        <div className={`${styles.description} ${styles.card}`}>
          <Link href='/login'>
            Connexion
          </Link>
        </div>

        <div className={`${styles.center} ${styles.marginAuto}`}>
          Bienvenue sur coach app
        </div>
      </main>
    </>
  )
}
