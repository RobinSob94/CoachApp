import styles from '@/styles/Home.module.css'
import useEquipierFormController from "@/controller/equipier/form/equipierFormController";

export default function EquipierForm() {
    const {
        setNom,
        setImage,
        errors,
        onSubmit
    } = useEquipierFormController()
    return (
        <form className={`${styles.card} ${styles.form}`} onSubmit={e => onSubmit(e)} n>
            <div className={styles.formComponent}>
                <label htmlFor={"image"}>Photo de profil / Image</label>
                <input className={styles.formInput} type={"file"} accept={".jpeg, .png"} id={"image"} onChange={e => setImage(e.target.value)}/>
                <span className="error">{errors["image"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"nom"}>Nom de l'équipier</label>
                <input className={styles.formInput} type={"text"} id={"nom"} onChange={e => setNom(e.target.value)}/>
                <span className="error">{errors["nom"]}</span>
            </div>

            <input className={styles.formButton} type={"submit"} value={"Enregister"}/>
        </form>
    )
}