import useUserModel from "@/models/user/userModel";
import Error403 from "@/pages/errors/403";
import GestionEtablissement from "@/pages/admin/gestion/etablissement/Etablissement";
import {useState} from "react";
import useEtablissementModel from "@/models/etablissement/etablissementModel";
import GestionService from "@/pages/maGestion/gestion/services/GestionService";


export default function PrestaGestionServices() {
    const {
        isPrestataire,
        fetchCurrentUser
    } = useUserModel()

    const {
        getAllEtablissementFromOnePrestataire,
        getOneEtablissementFromOnePrestataire
    } = useEtablissementModel()

    const [render, setRender] = useState("")

    const currentUser = fetchCurrentUser()

    const toto = getOneEtablissementFromOnePrestataire(16, 13)


    return (
        <>
            {isPrestataire(currentUser.id) === true ? <GestionService render={render} setRender={setRender} retour={"maGestion/gestion"} /> : <Error403 />}
        </>
    )
}