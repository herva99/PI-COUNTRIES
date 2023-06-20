const { Country, Activity } = require("../db");

const createActivity = async (name, difficulty, duration, season, countries) => {
  const newActivity = await Activity.create({ name, difficulty, duration, season, countries });
  const countryAct = await Country.findAll({
    where: { id: countries },
  });
  await newActivity.addCountries(countryAct);
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
