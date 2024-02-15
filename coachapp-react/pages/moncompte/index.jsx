import React from "react";
import MonCompte from "@/pages/moncompte/MonCompte";
import {useEffect, useState} from "react";
import useUserModel from "@/models/user/userModel";
import Cookies from "js-cookie";

export default function MoncompteContainer() {
    const {
        getCurrentUserId,
        getUserInfo
    } = useUserModel()

    const [seeUserForm, setSeeUserForm] = useState(false)
    const [currentUser, setCurrentUser] = useState({
        id: null,
        nom: "Waiting...",
        prenom: "Waiting...",
        email: "Waiting...",
        pseudo: "Waiting...",
        role: []

    })
    const [changeUserInfoFormState, setChangeUserInfoFormState] = useState({
        nom: "",
        prenom: "",
        email: "",
        pseudo: "",
        image: ""
    })
    console.log(changeUserInfoFormState)
    useEffect(() => {
        getCurrentUserId(Cookies.get('token')).then((response) => {
            getUserInfo({id: response.userId, token: Cookies.get('token')}).then((res) => {
                setCurrentUser({
                    id: res.id,
                    nom: res.nom,
                    prenom: res.prenom,
                    email: res.email,
                    pseudo: res.pseudo,
                    role: res.role
                })
            })
        })
    },[])


    const resetPassword = function resetPassword(){
        console.log("Password reset action")
        //     TODO: Mettre un mailer afin d'envoyer un mail en récupérant les informations du USER (id du USER, nom, prénom, email) on attend pas de réponse pour cette fonction.
        //     handleResetPassword(user.nom, user.prenom, user.email, user.id)
    }

    const userForm = function UserForm() {
        {seeUserForm ? setSeeUserForm(false) : setSeeUserForm(true)}
    }

    const onSubmit = function handleSubmit(e) {

        console.log(e)
    }


    return (
        <>
            <MonCompte
                resetPassword={resetPassword}
                seeUserForm={seeUserForm}
                userForm={userForm}
                userInformations={currentUser}
                onSubmit={onSubmit}
                formState={setChangeUserInfoFormState}
            />
        </>
    )
}