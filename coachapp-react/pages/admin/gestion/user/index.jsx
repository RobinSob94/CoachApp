import React from "react";
import useGestionRender from "@/controller/admin/gestion/useGestionRender";
import GestionUser from "@/pages/admin/gestion/user/User";

export default function GestionUserContainter() {
    const {
        setRender,
        render
    } = useGestionRender()

    return (
        <>
            <GestionUser render={render} setRender={setRender}/>
        </>
    )
}