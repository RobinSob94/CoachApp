import React from "react"
import PrestaListEtablissement from "@/components/UIComponents/prestaListEtablissement";
import {Inter} from "next/font/google";
import Prestataire from "@/pages/prestataire/Prestataire";

const inter = Inter({ subsets: ['latin'] })
export default function PrestaGestionContainter({...props}) {
    return(
        <>
                {props.prestataire !== {} ? <Prestataire presta={props.prestataire} isPresta={props.isPresta}/> : <div> Ce prestataire n'existe pas</div>}
                {props.prestataire !== {} && props.etablissements !== [{}] ?
                    <div>
                        <PrestaListEtablissement etablissements={props.etablissements} prestataire={props.prestataire}/>
                    </div> : <div>Le prestataire n'existe pas ou ne possède pas d'établissements</div>}
            </>
    )
}