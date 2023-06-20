const axios = require("axios");
const { Country } = require("../db");

const URL = "https://rest-countries.up.railway.app/v3/all";

const getCountryApi = async () => {
  try {
    const checkDb = await Country.findAll();
    
    if (checkDb.length === 0) {
      const response = await axios.get(URL);
      const apiData = response.data;
      
      const countryInfoMap = apiData.map((country) => ({
        id: country.cca3,
        name: country.name.common,
        imgFlag: country.flags[1],
        continent: country.region,
        capital: country.capital ? country.capital[0] : "capital not found",
        subregion: country.subregion ? country.subregion : "subregion not found",
        area: country.area,
        population: country.population,
      }));
      
      await Country.bulkCreate(countryInfoMap);
    }
    
    return checkDb;
  } catch (error) {
    console.error('Error al obtener y guardar los datos:', error);
    throw error;
  }
};


module.exports = {
  getCountryApi,
};
