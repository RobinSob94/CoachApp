import {useState} from "react";

export default function useGestionRender() {
    const [render, setRender] = useState("")

    return {
        setRender,
        render
    }
}