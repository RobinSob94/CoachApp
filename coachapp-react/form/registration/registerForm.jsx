import styles from '@/styles/Home.module.css'
import useRegisterController from "@/controller/register/registerFormController";

export default function RegisterForm() {
    const {
        setEmail,
        setNom,
        setPrenom,
        setPseudo,
        setPassword,
        setRole,
        errors,
        onSubmit
    } = useRegisterController()

    return (
        <form onSubmit={e => onSubmit(e)} className={`${styles.card} ${styles.form}`}>
            <div className={styles.formComponent}>
                <label htmlFor={"nom"}>Nom</label>
                <input className={styles.formInput} onChange={e => setNom(e.target.value)} id={"nom"}
                       type={"text"}/>
                <span className="error">{errors["nom"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"prenom"}>Prenom</label>
                <input className={styles.formInput} onChange={e => setPrenom(e.target.value)} id={"prenom"}
                       type={"text"}/>
                <span className="error">{errors["prenom"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"email"}>Email</label>
                <input onChange={e => setEmail(e.target.value)} className={styles.formInput} id={"email"}
                       type={"text"}/>
                <span className="error">{errors["email"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"pseudo"}>Pseudo</label>
                <input className={styles.formInput} onChange={e => setPseudo(e.target.value)} id={"pseudo"}
                       type={"text"}/>
                <span className="error">{errors["pseudo"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"password"}>Mot de passe</label>
                <input className={styles.formInput} onChange={e => setPassword(e.target.value)}
                       id={"password"} type={"password"}/>
                <span className="error">{errors["password"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"role"}>Vous êtes ?</label>
                <div id={"role"} className={styles.formComponent} onChange={e => setRole(e.target.value)}>
                    <div><input type="radio" value="USER" name="role"/> Utilisateur</div>
                    <div><input type="radio" value="PRESTATAIRE" name="role"/> Prestataire</div>
                </div>
            </div>
            <input className={styles.formButton} type="submit" value="Connexion"/>
        </form>
    )

}