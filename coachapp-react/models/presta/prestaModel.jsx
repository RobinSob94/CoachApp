export default function usePrestaModel() {

    function fetchPrestas() {
            return [
                {id: 1, nom: "toto", img: "azeeaz"},
                {id: 2, nom: "azeaze", img: "woll"},
                {id: 3, nom: "alalad", img: "cnjzvbhk"}
            ]
        }

        function prestaUnique(id){
        return {
            id: id,
            nom:"totototot",
            img: "rarhziufni"
        }
        }

        const newPresta = async (data = {}) => {
        const response = await fetch('http://localhost:8888/api/prestataires', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            return response.json()
    }


    return {
        prestaUnique,
        fetchPrestas,
        newPresta
    }
}