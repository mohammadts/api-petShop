import Animal from '../models/animal.model.js'
import Proprietario from '../models/proprietario.model.js'

async function createAnimal(animal) {
  try {
    return await Animal.create(animal)
  } catch (err) {
    throw err
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id)
  } catch (err) {
    throw err
  }
}

async function getAnimals() {
  try {
    return await Animal.findAll({ include: [{ model: Proprietario }] })
  } catch (err) {
    throw err
  }
}

async function getAnimalsByOwner(id) {
  try {
    return await Animal.findAll({ where: { proprietarioId: id } })
  } catch (err) {
    throw err
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, { where: { animalId: animal.animalId } })
    return await getAnimal(animal.animalId)
  } catch (err) {
    throw err
  }
}

async function deleteAnimal(id) {
  try {
    await Animal.destroy({
      where: { animalId: id }
    })
  } catch (err) {
    throw err
  }
}

export default {
  createAnimal,
  getAnimal,
  getAnimalsByOwner,
  getAnimals,
  updateAnimal,
  deleteAnimal
}
