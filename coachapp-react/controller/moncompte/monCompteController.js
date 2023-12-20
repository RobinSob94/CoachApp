import {useRouter, redirect} from "next/navigation";
import {useState} from "react";


export default function useMonCompteController() {
    // const {user} = userInfo()
    // const {isConnected} = useUserViewModel()
    const [seeUserForm, setSeeUserForm] = useState(false)
    const resetPassword = function resetPassword(){
        console.log("Password reset action")
    //     TODO: Mettre un mailer afin d'envoyer un mail en récupérant les informations du USER (id du USER, nom, prénom, email) on attend pas de réponse pour cette fonction.
    //     handleResetPassword(user.nom, user.prenom, user.email, user.id)
    }

    const userForm = function UserForm() {
        {seeUserForm ? setSeeUserForm(false) : setSeeUserForm(true)}

        console.log(seeUserForm)
    }

    const userInformations = {
        id: 1,
        image: '../../public/img.png',
        nom: 'Maux',
        prenom: 'Jeude',
        email: 'jeudemaux@false.com',
        pseudo: 'Manik-et-1',
        role: 'USER'
    }

    return {
        userInformations,
        resetPassword,
        userForm,
        seeUserForm
    }
}