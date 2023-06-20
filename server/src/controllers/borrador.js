const axios = require("axios");
const {Country, Activity}= require("../db");

const URL = "http://localhost:5000/countries";


const getCountryApi = async()=> {

    const checkDb = await Country.findAll();
    if(checkDb.length==0){
    const peticionApi = (await axios(`${URL}`)).data;
    const countryInfoMap = peticionApi.map((country)=>{
        return{
            id: country.cca3,
            name: country.name.common,
            image: country.flags.arg,
            continent: country.region,
            capital: country.capital ? country.capital[0] : "capital not found",
            subregion: country.subregion? country.subregion[0]: "subregion not found",
            area: country.area,
            population: country.population
        }
    })
    
    await Country.bulkCreate(countryInfoMap);
    console.log('base de datos actualizada')

    await Country.findAll({
        where:{}, include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {attributes: []}
        }
    });
}
return checkDb;

}

module.exports={
    
}

const {getCountryApi}= require("./db-up")
const {Country, Activity}= require("../db")

//Aqui en controllers vamos a tener toda la logica
//y este va a ser el unico que interactua con las 
//fuentes externas como la API y la BD

const getCountryDb = async () => {
    const allCountries = await getCountryApi()
    const countriesAll = await allCountries.findAll({
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: []
            }
        }
    })
    return countriesAll;
}

const getCountryByName= async(name)=>{
    const allCountries = getCountryApi()
    if(name){
        const countryByName= await allCountries.filter(
            (c)=>c.name.toLowerCase().includes(name.toLowerCase()));
        if(countryByName.length){
        return countryByName}
    } else {
        return allCountries
    };
}

const getCountryId= async(id)=>{
    const allCountries= getCountryApi()
    if(id){
        const countryId= await allCountries.findBypk(id,{
            include:{
            model:Activity,
            attributes:['name'],
            through:{
                attributes:[],
            }}
        })
        if(countryId.length){
            return countryId
        } 
    }else {
        return allCountries
    }
}


//////////////////////////////////
