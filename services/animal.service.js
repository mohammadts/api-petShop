import AnimalRepository from '../repositories/animal.repository.js'
import ProprietarioRepository from '../repositories/proprietario.repository.js'

async function createAnimal(animal) {
  return await AnimalRepository.createAnimal(animal)
}
async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id)
}

async function getAnimals(proprietarioId) {
  if (proprietarioId) {
    return await AnimalRepository.getAnimalsByOwner(proprietarioId)
  }
  return await AnimalRepository.getAnimals()
}
async function updateAnimal(animal) {
  const proprietario = await ProprietarioRepository.getProprietario(
    animal.proprietarioId
  )
  if (proprietario) {
    return await AnimalRepository.updateAnimal(animal)
  }

  throw new Error('Id de proprietário não encontrado')
}
async function deleteAnimal(id) {
  return await AnimalRepository.deleteAnimal(id)
}

export default {
  createAnimal,
  getAnimal,
  getAnimals,
  updateAnimal,
  deleteAnimal
}
