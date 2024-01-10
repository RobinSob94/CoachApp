export default function usePrestaModel() {

    function fetchPrestaUnique() {
            return [{"id": 1, "nom": "toto"},
             {"id": 2, "nom": "azeaze"},
             {"id": 3, "nom": "alalad"}]
        }


    return {
        fetchPrestaUnique,
    }
}