import React from "react"
import PrestaListEtablissement from "@/components/UIComponents/prestaListEtablissement";
//import {Inter} from "next/font/google";
import Prestataire from "@/pages/prestataire/Prestataire";
import PropTypes from "prop-types";

//const inter = Inter({ subsets: ['latin'] })

export default function PrestaGestionContainter({...props}) {
    return(
        <>
                {props.prestataire !== {} ? <Prestataire presta={props.prestataire} isPresta={props.isPresta}/> : <div> Ce prestataire n&apos;existe pas</div>}
                {props.prestataire !== {} && props.etablissements !== [{}] ?
                    <div>
                        <PrestaListEtablissement etablissements={props.etablissements} prestataire={props.prestataire}/>
                    </div> : <div>Le prestataire n&apos;existe pas ou ne possède pas d&apos;établissements</div>}
            </>
    )
}

PrestaGestionContainter.propTypes = {
    prestataire: PropTypes.object.isRequired,
    etablissements: PropTypes.array.isRequired,
    isPresta: PropTypes.bool.isRequired,
  };