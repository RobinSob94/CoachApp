import React from 'react';
import NavbarLink from "@/components/UIComponents/navbarLink";
import PropTypes from "prop-types";

export default function Navbar({...props}) {
 return(
     <>
         <NavbarLink lien={"/main"} nomLien={"CoachApp"} />
         {props.isAdmin && <NavbarLink lien={"/admin"} nomLien={"Administrateur"} />}
         <NavbarLink lien={"/moncompte"} nomLien={"Mon compte"} />
         <NavbarLink lien={"/prestataire"} nomLien={"Prestataire"} />
         {props.isPresta && <NavbarLink lien={"/maGestion"} nomLien={"Ma gestion"} />}
         <NavbarLink lien={"/reservation"} nomLien={"Réserver"} />
         {props.isPresta && <NavbarLink lien={"/listeequipier"} nomLien={"Liste Equipier"} />}
     </>
 )
}

Navbar.propTypes = {
    isAdmin: PropTypes.bool.isRequired,
    isPresta: PropTypes.bool.isRequired,
};