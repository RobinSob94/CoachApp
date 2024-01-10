export default function usePrestaModel() {

    function fetchPrestaUnique() {
            return [{"id": 1, "nom": "toto", "img": "azeeaz"},
             {"id": 2, "nom": "azeaze", "img": "woll"},
             {"id": 3, "nom": "alalad", "img": "cnjzvbhk"}]
        }


    return {
        fetchPrestaUnique,
    }
}