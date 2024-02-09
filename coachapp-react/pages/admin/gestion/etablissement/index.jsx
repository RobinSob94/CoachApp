import useGestionRender from "@/controller/admin/gestion/useGestionRender";
import GestionEtablissement from "@/pages/admin/gestion/etablissement/Etablissement";
import React from "react";
export default function GestionEtablissementContainer() {
    const {
        setRender,
        render
    } = useGestionRender()

    return (
        <>
            <GestionEtablissement render={render} setRender={setRender}/>
        </>
    )
}