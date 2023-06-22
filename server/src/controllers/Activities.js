const { Country, Activity } = require("../db");

const createActivity = async (name, difficulty, duration, season, countryId) => {
  const newActivity = await Activity.create({ name, difficulty, duration, season});
  const country = await Country.findByPk(countryId);
  await newActivity.setCountries(country);
  return newActivity;
};
const getActivity = async () => {
  const activitiesAll = await Activity.findAll();
  return activitiesAll;
};


module.exports = {
  createActivity,
  getActivity
};
