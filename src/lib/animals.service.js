const fs = require('fs');
const path = require('path');

const loadAnimalData = () => {
    const filepath = path.join(__dirname, '..', 'data', 'animals.json');
    const fileData = fs.readFileSync(filepath);
    return JSON.parse(fileData);
};

const getAnimals = () => {
    const animals = loadAnimalData();
    return animals;
};

const getAnimalById = (id) => {
    const animals = loadAnimalData();
    return animals.find(animal => animal.id === id);
};

module.exports = {
    getAnimals,
    getAnimalById
};