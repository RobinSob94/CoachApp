import MonCompte from "@/pages/moncompte/MonCompte";
import {useEffect, useState} from "react";
import useUserModel from "@/models/user/userModel";


export default function MoncompteContainer() {
    const {
        fetchCurrentUser
    } = useUserModel()

    // const {user} = userInfo()
    // const {isConnected} = useUserViewModel()
    const [seeUserForm, setSeeUserForm] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const resetPassword = function resetPassword(){
        console.log("Password reset action")
        //     TODO: Mettre un mailer afin d'envoyer un mail en récupérant les informations du USER (id du USER, nom, prénom, email) on attend pas de réponse pour cette fonction.
        //     handleResetPassword(user.nom, user.prenom, user.email, user.id)
    }

    const userForm = function UserForm() {
        {seeUserForm ? setSeeUserForm(false) : setSeeUserForm(true)}
    }

    useEffect(() => {
        const fetchU = async () => {
            const data = await fetchCurrentUser()
            return setCurrentUser(data)
        }

        fetchU()
    }, []);

    return (
        <>
            <MonCompte
                resetPassword={resetPassword}
                seeUserForm={seeUserForm}
                userForm={userForm}
                userInformations={currentUser}/>
        </>
    )
}