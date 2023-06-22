import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRIES_BY_ID, CREATE_ACTIVITY, GET_ACTIVITIES } from "../actions"

let initialState = {
  allCountries: [],
  countryDetail: null,
  activityData: null,
  allActivities: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload
      };
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        allCountries: action.payload
      };
    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        countryDetail: action.payload
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activityData: action.payload
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload
      };
    default:
      return state;
  }
};
