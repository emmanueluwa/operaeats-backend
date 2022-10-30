const groupService = require('../services/group.services');

// creating group
const createGroup = async (req, res) => {
  try {
    const body = { name: req.body.name, image: req.file.filename };
    group = await groupService.createGroup(body);
    return res.status(201).json({ group })
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

}


//exporting module
module.exports = {
  createGroup,
};