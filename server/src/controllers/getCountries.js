const { getCountryApi } = require("./db-up");
const { Country, Activity } = require("../db");


//Aqui en controllers vamos a tener toda la logica
//y este va a ser el unico que interactua con las 
//fuentes externas como la API y la BD


const getCountryDb = async () => {
  await getCountryApi()
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
  const allCountries = await getCountryDb();
  
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
  if (id) {
    const countryId = await Country.findByPk(id.toUpperCase(), {
      include: {
        model: Activity,
        attributes: ['name', 'difficulty', 'duration', 'season'],
        through: {
          attributes: [],
        },
      },
    });
    if (countryId) {
      return countryId;
    } else {
      throw new Error("No se encontró un país con ese ID");
    }
  } else {
    const allCountries = await getCountryDb();
    return allCountries;
  }
};



module.exports = {
  getCountryDb,
  getCountryByName,
  getCountryId,
};


