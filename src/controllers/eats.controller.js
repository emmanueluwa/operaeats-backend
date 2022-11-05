const eatService = require('../services/eats.services');

const createEat = async (req, res) => {
  try {
    const body = req.body;
    const createEat = await eatService.createEat(body);
    res.status(200).send({ message: 'Eat created', createEat });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


const getAllEats = async (req, res) => {
  try {
    const getAllEats = await eatService.getAllEats();
    res.status(200).send({ message: 'All eats retrieved', getAllEats })
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


const updateEat = async (req, res) => {
  try {
    const { eat_id } = req.params;
    body = req.body;
    const updatedEat = await eatService.updateEat(eat_id, body);
    res.status(200).send({ message: 'Eat updated', updatedEat });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

const deleteEat = async (req, res) => {
  try {
    const { eat_id } = req.params;
    const deletedEat = await eatService.deleteEat(eat_id);
    res.status(200).send({ message: 'eat deleted', deletedEat })
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


module.exports = {
  createEat,
  getAllEats,
  updateEat,
  deleteEat
}