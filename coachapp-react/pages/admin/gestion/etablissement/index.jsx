import React from "react";
import useGestionRender from "@/controller/admin/gestion/useGestionRender";
import GestionEtablissement from "@/pages/admin/gestion/etablissement/Etablissement";
import React from "react";
import useUserModel from "@/models/user/userModel";
export default function GestionEtablissementContainer() {
    const {
        setRender,
        render
    } = useGestionRender()

    const {
        isAdmin,
        fetchCurrentUser
    } = useUserModel()

    const currentUser = fetchCurrentUser()

    return (
        <>
            {isAdmin (currentUser.id) && <GestionEtablissement render={render} setRender={setRender} isAdmin={isAdmin(currentUser.id)}/>}
        </>
    )
}