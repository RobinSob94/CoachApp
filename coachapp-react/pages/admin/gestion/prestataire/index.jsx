import useGestionRender from "@/controller/admin/gestion/useGestionRender";
import GestionPrestataire from "@/pages/admin/gestion/prestataire/Prestataire";
import React from "react";
export default function GestionPrestataireContainer() {
    const {
        setRender,
        render
    } = useGestionRender()

    return (
        <>
            <GestionPrestataire render={render} setRender={setRender}/>
        </>
    )
}