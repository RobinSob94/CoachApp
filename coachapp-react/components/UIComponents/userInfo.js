import styles from "@/styles/Home.module.css";
import img from "@/public/img.png";
import Image from "next/image";


export default function UserInfo({...props}){
    console.log(img)
    return (
        <div>
            <Image className={styles.profilePicture} src={props.image} alt={"Profile picture of user " + props.pseudo} />
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>Nom:</td>
                        <td>{props.nom}</td>
                    </tr>
                    <tr>
                        <td>Prénom:</td>
                        <td>{props.prenom}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{props.email}</td>
                    </tr>
                    <tr>
                        <td>Pseudo:</td>
                        <td>{props.pseudo}</td>
                    </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}