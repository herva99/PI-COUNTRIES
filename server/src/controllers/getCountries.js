const { getCountryApi } = require("./db-up");
const { Country, Activity } = require("../db");


//Aqui en controllers vamos a tener toda la logica
//y este va a ser el unico que interactua con las 
//fuentes externas como la API y la BD


const getCountryDb = async () => {
  const allCountries = await getCountryApi();
  
  const countriesAll = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });

  return countriesAll;
};

const getCountryByName = async (name) => {
  const allCountries = await getCountryApi();
  
  if (name) {
    const countryByName = allCountries.filter((c) =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
    
    if (countryByName.length) {
      return countryByName;
    }
    throw new Error("No se encontro un Pais con ese nombre")
  } else {
    return allCountries;
  }
};

const getCountryId = async (id) => {
  const allCountries = await getCountryApi();
  
  if (id) {
    const countryId = await Country.findByPk(id.toUpperCase(), {
      include: {
        model: Activity,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    });
    
    if (countryId) {
      return countryId;
    }
  } else {
    return allCountries;
  }
};

module.exports = {
  getCountryDb,
  getCountryByName,
  getCountryId,
};


