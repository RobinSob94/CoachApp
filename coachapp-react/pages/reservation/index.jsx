import React from 'react';
import Reservation from "@/pages/reservation/Reservation";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";


export default function ReservationContainer({id_etablissement= 0}) {
    const [service, setService] = useState("")
    const [dateHoraire, setDateHoraire] = useState(new Date())
    const [equipiers, setEquipiers] = useState(null)
    console.log(id_etablissement);
    console.log(service,setService);
    console.log( dateHoraire, setDateHoraire)
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
        console.log(id_hebergement)
        await equipiersCollection()
    }

    
    getEquipier.propTypes = {
        id_hebergement: PropTypes.string.isRequired,
    };
    useEffect(() => {
        getEquipier(1)
    }, []);

    return (
        <>
            <Reservation equipiers={equipiers}/>
        </>
    )
}
