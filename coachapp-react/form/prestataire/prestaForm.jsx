import styles from '@/styles/Home.module.css'
import React from "react";
import Head from "next/head";
import {Inter} from "next/font/google";
import PropTypes from "prop-types";

const inter = Inter({ subsets: ['latin'] })


export default function PrestaForm({...props}) {
    return (
        <>
            <Head>
                <title>Prestataire inscription</title>
                <meta name="inscription prestataire" content="page d'enregistrement d'un prestataire" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className} ${styles.center}`}>

                <div className={styles.prestaContainer}>
                    <div className={styles.formTitle}>Vous êtes prestataire</div>
                    <div className={styles.card}>
                        <span>{props.stateFormError}</span>
                        <form className={`${styles.form}`} onSubmit={e => props.onSubmit(e)}>
                            <div className={styles.formComponent}>
                                <label htmlFor={'nomEntreprise'}>Nom de l'entreprise</label>
                                <input type={'text'} className={styles.formInput}
                                       onChange={e => props.setNomEntreprise(e.target.value)}
                                       id={'nomEntreprise'}/>
                                <span className={styles.error}>{props.errors["nomEntreprise"]}</span>
                            </div>

                            <div className={styles.formComponent}>
                                <label htmlFor={'adresse'}>Addresse</label>
                                <input type={'text'} className={styles.formInput}
                                       onChange={e => props.setAdresse(e.target.value)} id={'adresse'}/>
                                <span className={styles.error}>{props.errors['adresse']}</span>
                            </div>

                            <div className={styles.formComponent}>
                                <label htmlFor={'ville'}>Ville</label>
                                <input type={'text'} className={styles.formInput}
                                       onChange={e => props.setVille(e.target.value)} id={'addPostale'}/>
                                <span className={styles.error}>{props.errors['addPostale']}</span>
                            </div>

                            <div className={styles.formComponent}>
                                <label htmlFor={'codePostal'}>Code postal</label>
                                <input type={'text'} className={styles.formInput}
                                       onChange={e => props.setCodePostal(e.target.value)} id={'codePostal'}/>
                                <span className={styles.error}>{props.errors['codePostal']}</span>
                            </div>

                            <div className={styles.formComponent}>
                                <label htmlFor={'telephone'}>Téléphone</label>
                                <input type={'text'} className={styles.formInput}
                                       onChange={e => props.setTelephone(e.target.value)}
                                       id={'telephone'}/>
                                <span className={styles.error}>{props.errors['telephone']}</span>
                            </div>

                            <div className={styles.formComponent}>
                                <label htmlFor={'email'}>Email</label>
                                <input type={'text'} className={styles.formInput}
                                       onChange={e => props.setEmail(e.target.value)}
                                       id={'email'}/>
                                <span className={styles.error}>{props.errors['email']}</span>
                            </div>

                            <div className={styles.formComponent}>
                                <label htmlFor={'logo'}>Logo</label>
                                <input type={'file'} accept={'.jpeg, .png'} className={styles.formInput}
                                       onChange={e => props.setLogo(e.target.value)} id={'logo'}/>
                                <span className={styles.error}>{props.errors['logo']}</span>
                            </div>

                            <div className={styles.formComponent}>
                                <label htmlFor={'kbis'}>KBIS</label>
                                <input type={'file'} accept={'.pdf'} className={styles.formInput}
                                       onChange={e => props.setKbis(e.target.files[0])}
                                       id={'kbis'}/>
                                <span className={styles.error}>{props.errors['kbis']}</span>
                            </div>

                            <input className={styles.formButton} type="submit" value="Enregistrer"/>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

PrestaForm.propTypes = {
    setEmail: PropTypes.func.isRequired,
    setNomEntreprise: PropTypes.func.isRequired,
    setAdresse: PropTypes.func.isRequired,
    setVille: PropTypes.func.isRequired,
    setCodePostal: PropTypes.func.isRequired,
    setTelephone: PropTypes.func.isRequired,
    setLogo: PropTypes.func.isRequired,
    setKbis: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    stateFormError: PropTypes.string
};