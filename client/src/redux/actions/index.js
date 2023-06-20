import axios from "axios";

export const GET_COUNTRIES= "GET_COUNTRIES"
export const GET_COUNTRIES_BY_NAME= "GET_COUNTRIES_BY_NAME"

export  function getCountries(){
    return async function (dispatch){
        const response = await axios("http://localhost:3001/countries");

        return dispatch({
            type:"GET_COUNTRIES",
            payload: response.data
        })
    }
    
}

export  function getCountriesByName(name){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/countries/?name=${name}`);

        return dispatch({
            type:"GET_COUNTRIES_BY_NAME",
            payload: response.data
        })
    }
    
}
  