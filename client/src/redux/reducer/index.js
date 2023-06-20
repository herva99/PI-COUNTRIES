import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME } from "../actions"

let initialState= {
    allCountries:[], 
    copyCountries:[],
    
};
export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_COUNTRIES: 
        return{
            ...state,
            allCountries: action.payload,
            copyCountries: [...action.payload],

        }
        case GET_COUNTRIES_BY_NAME: 
        return{
            ...state,
            allCountries: action.payload,

        }
        default:
            return state;

    }
};
