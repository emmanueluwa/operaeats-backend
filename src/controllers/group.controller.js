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


//getting all groups
const getAllGroups = async (req, res) => {
  try {
    const groups = await groupService.getAllGroups();
    return res.status(200).json({ groups })

  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}


//deleting sector
const deleteGroup = async (req, res) => {
  try {
    const { group_id } = req.params;
    const deletedGroup = await groupService.deleteGroup(group_id);
    return res.status(200).json({ message: `Group deleted successfully`, deletedGroup });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

//exporting module
module.exports = {
  createGroup,
  getAllGroups,
  deleteGroup
};