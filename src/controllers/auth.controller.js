const { request } = require('express');
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


//logging out user
const userLogout = async (req, res) => {
  req.session = null;
  res.status(200).json({ message: 'Logged out successfully' });
}


//checking active user
const userActive = async (req, res) => {
  try {
    const user = await authService.activeUser(req.session.token);
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


//export functions
module.exports = {
  userLogin,
  userLogout,
  userActive
};