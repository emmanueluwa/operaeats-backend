const authService = require('../services/auth.services');

//logging in user
const userLogin = async (req, res) => {
  try {
    const token = await authService.loginUser(req.body);
    req.session = { token: token }
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//export functions
module.exports = {
  userLogin,
};