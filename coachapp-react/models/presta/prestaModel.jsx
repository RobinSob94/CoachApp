export default function usePrestaModel() {

    function fetchPrestas() {
            return [
                {id: 1, nom: "toto", img: "azeeaz"},
                {id: 2, nom: "azeaze", img: "woll"},
                {id: 3, nom: "alalad", img: "cnjzvbhk"}
            ]
        }

        function prestaUnique(id){
            console.log('Un id: '+id)
        return {
            id: id,
            nom:"totototot",
            img: "rarhziufni"
        }
        }


    return {
        prestaUnique,
        fetchPrestas
    }
}