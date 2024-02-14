import React from 'react';
import Reservation from "@/pages/reservation/Reservation";
import useequipierModel from '@/models/equipier/equipierModel'
import {useEffect, useState} from "react";
import useReservationController from "@/controller/reservation/reservationController";
import PropTypes from "prop-types";


export default function ReservationContainer({id_etablissement= 0}) {
    console.log(id_etablissement)
    const {
        fetchEquipierUnique,
    } = useequipierModel()

    const {
        displayInfo
    } = useReservationController()

    const [equipierUnique, setEquipierUnique] = useState({})

    useEffect(() => {
        const fetchP = async () => {
            const dataUnique = await fetchEquipierUnique()
            setEquipierUnique(dataUnique)
            return setEquipierUnique(dataUnique);
        }
            fetchP()
        },[]);

    return (
        <>
            <Reservation equipier={equipierUnique} action={displayInfo}/>
        </>
    )
}

ReservationContainer.propTypes = {
    id_etablissement: PropTypes.number.isRequired,
};