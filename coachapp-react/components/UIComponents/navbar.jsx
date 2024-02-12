import React from 'react';
import styles from '@/styles/Home.module.css';
import NavbarLink from "@/components/UIComponents/navbarLink";

export default function Navbar({...props}) {
 return(
     <>
         <NavbarLink lien={"/main"} nomLien={"CoachApp"} />
         {props.isAdmin && <NavbarLink lien={"/admin"} nomLien={"Administrateur"} />}
         <NavbarLink lien={"/moncompte"} nomLien={"Mon compte"} />
         <NavbarLink lien={"/prestataire"} nomLien={"Prestataire"} />
         {props.isPresta && <NavbarLink lien={"/maGestion"} nomLien={"Ma gestion"} />}
         <NavbarLink lien={"/reservation"} nomLien={"Réserver"} />
     </>
 )
}