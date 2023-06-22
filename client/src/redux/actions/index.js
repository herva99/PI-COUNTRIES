import axios from "axios";

export const GET_COUNTRIES= "GET_COUNTRIES"
export const GET_COUNTRIES_BY_NAME= "GET_COUNTRIES_BY_NAME"
export const GET_COUNTRIES_BY_ID= "GET_COUNTRIES_BY_ID"
export const CREATE_ACTIVITY= "CREATE_ACTIVITY"
export  function getCountries(){
    return async function (dispatch){
        const response = await axios("http://localhost:3001/countries");
        return dispatch({
            type:"GET_COUNTRIES",
            payload: response.data
        })
    }
};

export  function getCountriesByName(name){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/countries/?name=${name}`);
        return dispatch({
            type:"GET_COUNTRIES_BY_NAME",
            payload: response.data
        })
    }
    
};

export  function getCountriesById(id){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type:"GET_COUNTRIES_BY_ID",
            payload: response.data
        })
    }
};
export function createActivity(input) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/activities", input);
      return dispatch({
        type: "CREATE_ACTIVITY",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
