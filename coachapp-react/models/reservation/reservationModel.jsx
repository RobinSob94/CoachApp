export default function useReservationModel() {

    function fetchReservation() {
            return [{"id": 1, "nom": "toto", "img": "azeeaz"},
             {"id": 2, "nom": "azeaze", "img": "woll"},
             {"id": 3, "nom": "alalad", "img": "cnjzvbhk"}]
        }

        function fetchReservationUnique(){
        return {"id": 4, "nom":"totototot", "img": "rarhziufni"}
        }


    return {
        fetchReservationUnique,
        fetchReservation
    }
}