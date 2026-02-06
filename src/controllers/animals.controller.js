const animalService = require('../lib/animals.service');

const animalIndex = (req, res) => {
    const animals = animalService.getAnimals();
    res.render('animals', { title: 'Animals', animals });
};

const animalDetails = (req, res) => {
    const { id } = req.params;
    const animal = animalService.getAnimalById(id);

    if (!animal) {
        return res.status(404).render('404', { title: 'Animal Not Found' });
    }

    res.render('animal-details', { title: animal.title, animal });
};

module.exports = {
    animalIndex,
    animalDetails
};