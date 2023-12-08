import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
await Human.findByPk(2);
export const query1 = null;

// Get the first animal whose species is "fish"
await Animal.findOne({where: {species: 'fish'}});
export const query2 = null;

// Get all animals belonging to the human with primary key 5
await Human.findByPk(5).getAnimals();
export const query3 = null;

// Get all animals born in a year greater than (but not equal to) 2015.
await Animal.findAll({where: {birthYear: {[Op.gt]: 2015}}});
export const query4 = null;

// Get all the humans with first names that start with "J"
await Human.findAll({where: {fname: {[Op.like]: 'J%'}}});
export const query5 = null;

// Get all the animals who don't have a birth year
await Animal.findAll({where: {birthYear: null}});
export const query6 = null;

// Get all the animals with species "fish" OR "rabbit"
await Animal.findAll({where: {[Op.or]:[{species: 'fish'}, {species: 'rabbit'}]}});
export const query7 = null;

// Get all the humans who DON'T have an email address that contains "gmail"
await Human.findAll({where: {email: {[Op.notLike]: '%gmail%'}}});
export const query8 = null;

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    await Human.getAnimals()
}

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {
    const humans = new Set()
}
