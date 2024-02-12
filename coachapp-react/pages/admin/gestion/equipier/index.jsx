import React from "react";
import useGestionRender from "@/controller/admin/gestion/useGestionRender";
import GestionEquipier from "@/pages/admin/gestion/equipier/Equipier";
import React from "react";
import useUserModel from "@/models/user/userModel";


export default function GestionEquipierContainer() {
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
            {isAdmin(currentUser.id) && <GestionEquipier setRender={setRender} render={render} isAdmin={isAdmin(currentUser.id)}/>}
        </>
    )
}