import React from "react";
//import Head from "next/head";
//import styles from "@/styles/Home.module.css";
//import Link from "next/link";

//import Navbar from "@/components/UIComponents/navbar";
//import AdminNavbar from "@/components/UIComponents/adminNavbar";
import useGestionRender from "@/controller/admin/gestion/useGestionRender";
//import RegisterForm from "@/form/registration/registerForm";
import GestionUser from "@/pages/admin/gestion/user/User";


export default function GestionUserContainter() {
    const {
        setRender,
        render
    } = useGestionRender()

    return (
        <>
            <GestionUser render={render} setRender={setRender}/>
        </>
    )
}