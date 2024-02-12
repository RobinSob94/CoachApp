import useUserModel from "@/models/user/userModel";
import Error403 from "@/pages/errors/403";
import GestionEtablissement from "@/pages/admin/gestion/etablissement/Etablissement";
import {useState} from "react";


export default function PrestaGestionEtablissements() {
    const {
        isPrestataire,
        fetchCurrentUser
    } = useUserModel()

    const [render, setRender] = useState("")

    const currentUser = fetchCurrentUser()

    return (
        <>
            {isPrestataire(currentUser.id) === true ? <GestionEtablissement render={render} setRender={setRender} retour={"/maGestion/gestion"} /> : <Error403 />}
        </>
    )
}