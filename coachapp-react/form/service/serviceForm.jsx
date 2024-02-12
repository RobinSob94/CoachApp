import styles from '@/styles/Home.module.css'
import useServiceFormController from "@/controller/service/serviceFormController";
import React from "react";


export default function ServiceForm() {
    const {
        setLibelle,
        setPrix,
        error,
        onSubmit
    } = useServiceFormController()

    return(
        <form>
            <div className={styles.formComponent}>
                <label htmlFor={"libelle"}>Libelle</label>
                <input type={"text"} className={styles.formInput} id={"libelle"}/>
                <span className={"error"}>{error["libelle"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"prix"}>Prix</label>
                <input type={"number"} className={styles.formInput} id={"prix"}/>
                <span className={"error"}>{error["prix"]}</span>
            </div>
        </form>
    )
}