import React from "react";
import styles from '@/styles/Home.module.css';
import Link from "next/link";
import useNavbarLinkController from "@/controller/navbar/navbarLinkController";
import PropTypes from "prop-types";

export default function NavbarLink({lien, nomLien}) {
    const {
        actualPath
    } = useNavbarLinkController()

    return (
        <Link className={`${styles.link} ${actualPath === lien ? styles.linkIsActive : ""}`} href={lien}>{nomLien}</Link>
    )
}

NavbarLink.propTypes = {
    lien: PropTypes.string.isRequired,
    nomLien: PropTypes.string.isRequired,
};