const originServices = require('../services/origin.services');

//creating origin
const createOrigin = async (req, res) => {
  try {
    const body = req.body;
    const createOrigin = await originServices.createOrigin(body);
    res.status(201).send({ message: 'origin created', createOrigin });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


// getting all origins
const getAllOrigins = async (req, res) => {
  try {
    const getAllOrigins = await originServices.getAllOrigins();
    res.status(200).send({ message: 'Origins retrieved', getAllOrigins });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


// editing an origin
const editOrigin = async (req, res) => {
  try {
    const { origin_id } = req.params;
    const body = req.body;
    const editedOrigin = await originServices.editOrigin(origin_id, body);
    res.status(200).send({ message: 'Origin edited', editedOrigin });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


// deleting and origin
const deleteOrigin = async (req, res) => {
  try {
    const { origin_id } = req.params;
    const deletedOrigin = await originServices.deleteOrigin(origin_id);
    res.status(200).send({ message: 'origin deleted', deletedOrigin });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}



module.exports = {
  createOrigin,
  getAllOrigins,
  editOrigin,
  deleteOrigin
}