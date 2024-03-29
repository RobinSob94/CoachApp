
import React from "react";
import PropTypes from "prop-types";

export default function UserInfo({...props}){
    return (
        <div>
            {/*<Image className={styles.profilePicture} src={props.image} alt={"Profile picture of user " + props.pseudo} />*/}
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

UserInfo.propTypes = {
    nom: PropTypes.string,
    prenom: PropTypes.string,
    email: PropTypes.string,
    pseudo: PropTypes.string,
};