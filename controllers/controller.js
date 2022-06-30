const {
  setState,
  getState,
  advanceSimulation,
} = require('../services/game-services');

const setGrid = async (req, res, next) => {
  try {
    const grid = JSON.parse(req.body.grid);
    console.log(grid);
    const newGrid = await setState(grid);
    res.status(200).json(newGrid);
  } catch (err) {
    console.log(err);
    res.status(500) && next(err);
  }
};

const getGrid = async (req, res, next) => {
  try {
    const state = await getState();
    res.status(200).json(state);
  } catch (err) {
    console.log(err);
    res.status(500) && next(err);
  }
};

const advance = async (req, res, next) => {
  try {
    await advanceSimulation();
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500) && next(err);
  }
};

module.exports = {
  setGrid,
  getGrid,
  advance,
};
