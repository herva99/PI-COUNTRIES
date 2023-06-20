const {getCountryDb, getCountryByName, getCountryId}= require("../controllers/getCountries")

//los Handlers utilizan a los controllers y envian una
// respuesta adecuada(esto puede ser lo que hayan solicitado o un mensaje de error)


const getAllCountries = async (req, res) => {
    try {
      const response = await getCountryDb();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const getCountriesByNameHandler= async(req, res) =>{
    const {name}= req.query
    try{
      if(name){
        const response = await getCountryByName(name)
        return res.status(200).json(response)
      }
      const response = await getCountryByName()
      return res.status(200).json(response)
    } catch(error){
    res.status(200).json({ error: error.message} )
    }
  };

const getCountriesIdHandler= async(req, res)=>{
    const{id}= req.params;
    try{
      const response= await getCountryId(id)
      return res.status(200).json(response)
    } catch(error){
    res.status(200).json({error: error.message})
    }
  }




module.exports= {
    getCountriesByNameHandler,
    getCountriesIdHandler,
    getAllCountries
}