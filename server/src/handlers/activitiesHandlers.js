const { createActivity, getActivity } = require("../controllers/Activities");

const getActivitiesHandler = async (req, res) => {
  const response = await getActivity();
  res.status(200).json(response);
};

const postActivitiesHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const response = await createActivity(name, difficulty, duration, season, countries);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivitiesHandler,
  postActivitiesHandler
};
