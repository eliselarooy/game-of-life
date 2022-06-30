const express = require('express');
const router = express.Router();

const { setGrid, getGrid, advance } = require('../controllers/controller');

router.route('/grid').get(getGrid).post(setGrid);

router.route('/advance').put(advance);

module.exports = router;
