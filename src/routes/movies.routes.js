const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies.controller');

router.get('/', moviesController.movieIndex);
router.get('/:id', moviesController.movieDetails);

module.exports = router;