import React from 'react';
import Reservation from "@/pages/reservation/Reservation";
import useequipierModel from '@/models/equipier/equipierModel'
import {useEffect, useState} from "react";
import useReservationController from "@/controller/reservation/reservationController";
import PropTypes from "prop-types";


export default function ReservationContainer({id_etablissement= 0}) {

    const {
        fetchEquipierUnique,
        fetchEquipier
    } = useequipierModel()

    const {
        displayInfo
    } = useReservationController()

    const [service, setService] = useState("")
    const [dateHoraire, setDateHoraire] = useState(new Date())
    const [equipiers, setEquipiers] = useState([])
    const [equipierUnique, setEquipierUnique] = useState({})

    useEffect(() => {
        const fetchP = async () => {
            const dataUnique = await fetchEquipierUnique()
            const data = await fetchEquipier()
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
