import React from "react";
import Reservation from "@/pages/reservation/reservation";
import {useEffect, useState} from "react";

export default function ReservationContainer({id_hebergement= 0}) {
    const [service, setService] = useState("")
    const [dateHoraire, setDateHoraire] = useState(new Date())
    const [equipiers, setEquipiers] = useState(null)

    function equipiersCollection() {
        setEquipiers( [
            {
                "id": 1,
                "nom": "Jean",
                "jour_travail": ["Lundi", "Mardi", "Mercredi", "Dimanche"]
            },
            {
                "id": 2,
                "nom": "Eude",
                "jour_travail": ["Lundi", "Mardi", "Jeudi", "Vendredi"]
            },
            {
                "id": 3,
                "nom": "Myreille",
                "jour_travail": ["Lundi", "Mardi", "Mercredi", "Vendredi"]
            },
            {
                "id": 4,
                "nom": "Chloé",
                "jour_travail": ["Lundi", "Mardi", "Jeudi", "Samedi"]
            }
        ])
    }


    async function getEquipier(id_hebergement) {
        await equipiersCollection()
    }

    useEffect(() => {
        getEquipier(1)
    }, []);

    return (
        <>
            <Reservation equipiers={equipiers}/>
        </>
    )
}