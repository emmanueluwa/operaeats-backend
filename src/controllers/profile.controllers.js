const profileServices = require('../services/profile.services');

// creating profile
const createProfile = async (req, res) => {
  // collecting the body and using ...spread to allow us to add user_id to equation
  body = { ...req.body, user_id: req.user.id };
  try {
    const createdProfile = await profileServices.createProfile(body);
    res.status(201).send(createdProfile);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

module.exports = {
  createProfile,
}