import useGestionRender from "@/controller/admin/gestion/useGestionRender";
import GestionEquipier from "@/pages/admin/gestion/equipier/Equipier";


export default function GestionEquipierContainer() {
    const {
        setRender,
        render
    } = useGestionRender()

    return (
        <>
            <GestionEquipier setRender={setRender} render={render}/>
        </>
    )
}