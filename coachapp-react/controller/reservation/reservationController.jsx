import React from "react";

export default function useReservationController(){

    const displayInfo = function handleSubmit(equipier,heure,jour){
        console.log(
            equipier,
            heure,
            jour
            )
    }


    return {
        displayInfo
    }
}