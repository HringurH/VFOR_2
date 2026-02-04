const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const getMovies = () => {
    const data = fs.readFileSync(path.join(__dirname, 'src', 'data', 'movies.json'));
    return JSON.parse(data);
}

const getAnimals = () => {
    const data = fs.readFileSync(path.join(__dirname, 'src', 'data', 'animals.json'));
    return JSON.parse(data);
}

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/movies', (req, res) => {
    const movies = getMovies();
    res.render('movies', { title: 'Movies', movies });
});

app.get('/movies/:id', (req, res) => {
    const movies = getMovies();
    const movie = movies.find(m => m.id === req.params.id);

    if (!movie) {
        return res.status(404).render('404', { title: 'Movie Not Found' });
    }

    res.render('movie-details', { title: movie.title, movie });
});

app.get('/animals', (req, res) => {
    const animals = getAnimals();
    res.render('animals', { title: 'Animals', animals });
});

app.get('/animals/:id', (req, res) => {
    const animals = getAnimals();
    const animal = animals.find(a => a.id === req.params.id);

    if (!animal) {
        return res.status(404).render('404', { title: 'Animal Not Found' });
    }

    res.render('animal-details', { title: animal.name, animal });
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press CTRL+C to stop the server');
});