const express = require('express');
const router = express.Router();

const animalsController = require('../controllers/animals.controller');

router.get('/', animalsController.animalIndex);
router.get('/:id', animalsController.animalDetails);

module.exports = router;