export default function useEquipierModel() {

    function fetchEquipier() {
            return [{"id": 1, "nom": "Jean", "jour_travail": ["Lundi", "Mardi", "Mercredi", "Dimanche"]},
             {"id": 2, "nom": "Eude",  "jour_travail": ["Lundi", "Mardi", "Jeudi", "Vendredi"]},
             {"id": 3, "nom": "Myreille", "jour_travail": ["Lundi", "Mardi", "Mercredi", "Vendredi"]},
             {"id": 4, "nom": "Chloé", "jour_travail": ["Lundi", "Mardi", "Jeudi", "Samedi"]}]
        }

        function fetchEquipierUnique(){
        return {"id": 3, "nom": "Myreille", "jour_travail": ["Lundi", "Mardi", "Mercredi", null, "Vendredi", null, null]}
        }


    return {
        fetchEquipierUnique,
        fetchEquipier
    }
}