import useUserModel from "@/models/user/userModel";
import {useState} from "react";
import GestionEquipier from "@/pages/admin/gestion/equipier/Equipier";
import Error403 from "@/pages/errors/403";

export default function PrestaGestionEquipiers() {
    const {
        isPrestataire,
        fetchCurrentUser
    } = useUserModel()

const [render, setRender] = useState("")

const currentUser = fetchCurrentUser()

    return (
        <>
            {isPrestataire(currentUser.id) === true ? <GestionEquipier render={render} setRender={setRender} retour={"/maGestion/gestion"} /> : <Error403 />}
        </>
    )
}