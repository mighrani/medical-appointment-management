import { combineReducers, createStore } from "redux"

const initialStatePatient=[
    {"id": 1, "cin": "A123456", "nom": "Smith", "prenom": "John", "tel": "+123456789",     "dateNaissance": "15/01/1993", "sexe": "M", "rendezVous": "2024-02-01","valid":false },
    {"id": 2, "cin": "B789012", "nom": "Johnson", "prenom": "Emily", "tel": "+987654321",  "dateNaissance": "12/01/2000", "sexe": "F", "rendezVous": "2024-02-01","valid":false },
    {"id": 3, "cin": "C345678", "nom": "Davis", "prenom": "Michael", "tel": "+112233445",  "dateNaissance": "10/01/1993", "sexe": "M", "rendezVous": "01/02/2024","valid":false },
    {"id": 4, "cin": "D901234", "nom": "Jones", "prenom": "Emma", "tel": "+445566778",     "dateNaissance": "15/01/2000", "sexe": "F", "rendezVous": "31/01/2024","valid":false },
    {"id": 5, "cin": "E567890", "nom": "Miller", "prenom": "Ryan", "tel": "+998877665",    "dateNaissance": "18/01/1993", "sexe": "M", "rendezVous": "01/02/2024","valid":false },
    {"id": 6, "cin": "F234567", "nom": "Anderson", "prenom": "Sophia", "tel": "+112233445","dateNaissance": "18/01/2004", "sexe": "F", "rendezVous": "26/01/2024","valid":false },
    {"id": 7, "cin": "G890123", "nom": "Wilson", "prenom": "Daniel", "tel": "+332211445",  "dateNaissance": "14/01/1993", "sexe": "M", "rendezVous": "31/01/2024","valid":false },
    {"id": 8, "cin": "H456789", "nom": "Brown", "prenom": "Olivia", "tel": "+554433221",   "dateNaissance": "18/01/2001", "sexe": "F", "rendezVous": "31/01/2024","valid":false },
    {"id": 9, "cin": "I012345", "nom": "Taylor", "prenom": "Andrew", "tel": "+778899001",  "dateNaissance": "13/01/1993", "sexe": "M", "rendezVous": "01/02/2024","valid":false },
    {"id": 10, "cin": "J678901", "nom": "Moore", "prenom": "Ella", "tel": "+112233445",    "dateNaissance": "30/01/2022", "sexe": "F", "rendezVous": "31/01/2024","valid":false }
]

const addp = "ADD_PATIENT"
const deleteP = "DELATE_PATIENT"
const valideP = "VALID_PATIENT"
const updateR = "UPDATE_RENDEZ_VOUUS"

function reducerPatient(state = initialStatePatient,action){
    console.log(action)
    switch(action.type){
        
        case addp:
            return [...state,{"id":state.length+1,"cin": action.payload.cin, "nom": action.payload.nom, "prenom": action.payload.prenom, "tel": action.payload.tel,"dateNaissance": action.payload.dateNaissance, "sexe": action.payload.sexe, "rendezVous": action.payload.rendezVous , "valid":false }]
        case deleteP:
            return state.filter(e=>e.cin !== action.payload)
        case valideP:
            return state.map(e=>{
                if(e.cin==action.payload){
                    return {...e,"valid":true}
                }
                else return e 
            })
        case updateR:
            return state.map(e=>{
                if(e.cin==action.payload30){
                    return {...e,...action.payload}
                }
                else return e 
            })

        default :
            return state
    }

}
// action creator : 
export function addpatient(v){
    return {type:addp , payload:v}
}
export function deletepatient(v){
    return {type:deleteP , payload:v}
}
export function validptient(v){
    return {type:valideP , payload:v}
}
export function updateRenderVous(v){
    return {type:updateR , payload:v}
}

// 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111

const dossier = null;
function reducerDossier(state = dossier, action) {
    switch (action.type) {
        case 'SET_DOSSIER':
            return action.payload;
        default:
            return state;
    }
}


// 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111

const initialStateSearch = {select : "prenom", input:""}
function reducerSearch(state = initialStateSearch,action){
    switch(action.type){
        case "select":
            return {...state,select:action.payload}
        case "input":
            return {...state,input:action.payload}
        default :
            return state
    }
}

// 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111

const initialLogin = { cin: "qqq", pass: "qqq", valid: false };
function reducerLogin(state = initialLogin, action) {
    switch (action.type) {
        case "login":
            if (state.cin === action.payload.cin && state.pass === action.payload.pass) {
                return { ...state, valid: true };
            }
            return state;
        default:
            return state;
    }
}


// 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111


const reducers = combineReducers({patient :reducerPatient , search:reducerSearch, dossier:reducerDossier, login : reducerLogin })
export const store = createStore(reducers)

