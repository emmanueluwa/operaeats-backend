const userServices = require('../services/user.services');

//creating a new user
const createUser = async (req, res) => {
  try {
    //wait for response from service when body of request is passed to it
    const user = await userServices.createUser(req.body);
    return res.status(201).send({ message: 'User created', user });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

// export all the functions 
module.exports = {
  createUser,
}

