import styles from '@/styles/Home.module.css'
import usePrestaFormController from "@/controller/prestataire/form/prestaFormController";


export default function PrestaForm() {
    const {
        setEmail,
        setTelephone,
        setNomEntreprise,
        setAddPostale,
        setKbis,
        errors,
        onSubmit
    } = usePrestaFormController()

    return (
        <form className={`${styles.card} ${styles.prestaForm}`} onSubmit={e => onSubmit(e)}>
            <div className={styles.formComponent}>
                <label htmlFor={'nomEntreprise'}>Nom de l'entreprise</label>
                <input type={'text'} className={styles.formInput} onChange={e => setNomEntreprise(e.target.value)}
                       id={'nomEntreprise'}/>
                <span className={styles.error}>{errors["nomEntreprise"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={'addPostale'}>Addresse</label>
                <input type={'text'} className={styles.formInput} onChange={e => setAddPostale(e.target.value)}
                       id={'addPostale'}/>
                <span className={styles.error}>{errors['addPostale']}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={'telephone'}>Téléphone</label>
                <input type={'text'} className={styles.formInput} onChange={e => setTelephone(e.target.value)}
                       id={'telephone'}/>
                <span className={styles.error}>{errors['telephone']}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={'email'}>Email</label>
                <input type={'text'} className={styles.formInput} onChange={e => setEmail(e.target.value)}
                       id={'email'}/>
                <span className={styles.error}>{errors['email']}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={'kbis'}>KBIS</label>
                <input type={'file'} accept={'.pdf'} className={styles.formInput}
                       onChange={e => setKbis(e.target.files[0])}
                       id={'kbis'}/>
                <span className={styles.error}>{errors['kbis']}</span>
            </div>

            <input className={styles.formButton} type="submit" value="Enregistrer"/>
        </form>
    )
}