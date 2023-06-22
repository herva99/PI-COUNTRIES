const { createActivity, getActivity } = require("../controllers/Activities");


//los Handlers utilizan a los controllers y envian una
// respuesta adecuada(esto puede ser lo que hayan solicitado o un mensaje de error)


const getActivitiesHandler = async (req, res) => {
  const response = await getActivity();
  res.status(200).json(response);
};
const postActivitiesHandler = async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body;
  try {
    const response = await createActivity(name, difficulty, duration, season, countryId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivitiesHandler,
  postActivitiesHandler
};
