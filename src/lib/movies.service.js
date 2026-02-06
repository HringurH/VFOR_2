const fs = require('fs');
const path = require('path');

const loadMovieData = () => {
    const filepath = path.join(__dirname, '..', 'data', 'movies.json');
    const fileData = fs.readFileSync(filepath);
    return JSON.parse(fileData);
};

const getMovies = () => {
    const movies = loadMovieData();
    return movies;
};

const getMovieById = (id) => {
    const movies = loadMovieData();
    return movies.find(movie => movie.id === id);
};

module.exports = {
    getMovies,
    getMovieById
};