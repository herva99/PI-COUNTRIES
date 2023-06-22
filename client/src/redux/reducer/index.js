import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRIES_BY_ID, CREATE_ACTIVITY } from "../actions"

let initialState= {
    allCountries:[],
    countryDetail: {},
    activityData: {}
};
export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_COUNTRIES: 
        return{
            ...state,
            allCountries: action.payload
        }
        case GET_COUNTRIES_BY_NAME: 
        return{
            ...state,
            allCountries: action.payload
        }
        case GET_COUNTRIES_BY_ID: 
        return{
            ...state,
            countryDetail: action.payload,
        }
        case CREATE_ACTIVITY:
            return{
                ...state,
                activityData: action.payload
            }
        default:
            return state;

    }
};
