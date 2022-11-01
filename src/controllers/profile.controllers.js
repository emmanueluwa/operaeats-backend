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


//  editing profile
const editProfile = async (req, res) => {
  try {
    const { user_id } = req.params;
    const body = req.body;
    const editedProfile = await profileServices.updateProfile(user_id, body);
    res.status(200).send({ message: 'Profile updated successfully', editedProfile });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = {
  createProfile,
  editProfile
}