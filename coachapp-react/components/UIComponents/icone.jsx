import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";

export default function Icone({...props}) {
    return (
        <Link href="/">
            <a>
                <FontAwesomeIcon icon={faHouse} />
                <p>{props.nom}</p>
            </a>
        </Link>
    )
}


Icone.propTypes = {
    nom: PropTypes.array.isRequired,
};

