import styles from "@/styles/Home.module.css";
import { Inter } from 'next/font/google';
import React from "react";
const inter = Inter({ subsets: ['latin'] })

export default function PrestaListEtablissement({...props}) {
    console.log(props.etablissements)
    if (props.etablissements !== [{}])
        return(
            <div>
                <div className={styles.prestaListEtablissement}>
                    {props.etablissements.map(etablissement =>
                        <div key={etablissement.id} className={styles.card}>
                            <div className={styles.cardRow}><p>Nom de l'établissement</p> <p>{etablissement.nom_etablissement}</p></div>
                            <div className={styles.cardRow}><p>Adresse</p> <p>{etablissement.adresse}</p></div>
                            <div className={styles.cardRow}><p>Heure d'ouverture</p> <p>{etablissement.heure_open}</p></div>
                            <div className={styles.cardRow}><p>Heure de fermeture</p> <p>{etablissement.heure_close}</p></div>
                            <div className={styles.cardRow}><p>Prix horaire</p> <p>{etablissement.prixH}</p></div>
                            <div className={styles.cardRow}><p>Equipiers présent</p> <p>{etablissement.equipier}</p></div>
                            <div className={styles.cardRow}><p>Services</p> <p>{etablissement.services}</p></div>
                        </div>)}
                </div>
            </div>
        )
    else return (
        <div> Pas d'établissements associés </div>
    )
}
