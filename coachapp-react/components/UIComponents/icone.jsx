import styles from '@/styles/Home.module.css';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

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

