const movieService = require('../lib/movies.service');

const movieIndex = (req, res) => {
    const movies = movieService.getMovies();
    res.render('movies', { title: 'Movies', movies });
}

const movieDetails = (req, res) => {
    const { id } = req.params;
    const movie = movieService.getMovieById(id);

    if (!movie) {
        return res.status(404).render('404', { title: 'Movie Not Found' });
    }

    res.render('movie-details', { title: movie.title, movie });
};

module.exports = {
    movieIndex,
    movieDetails
};