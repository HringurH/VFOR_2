const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.use((req, res) => {
    res.status(404).send('Page Not Found (404)');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});