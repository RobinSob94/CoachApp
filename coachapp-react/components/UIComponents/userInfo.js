import styles from "@/styles/Home.module.css";
import img from "@/public/img.png";


export default function UserInfo({...props}){
    return (
        <div>
            <img src={img} alt={"Profile picture of user " + props.pseudo}/>
            <div>
                <table>
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
                </table>
            </div>
        </div>
    )
}