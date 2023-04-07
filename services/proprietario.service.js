import ProprietarioRepository from '../repositories/proprietario.repository.js'
import AnimalRepository from '../repositories/animal.repository.js'

async function createProprietario(client) {
  return await ProprietarioRepository.createProprietario(client)
}
async function getProprietario(id) {
  return await ProprietarioRepository.getProprietario(id)
}
async function getProprietarios() {
  return await ProprietarioRepository.getProprietarios()
}
async function updateProprietario(client) {
  return await ProprietarioRepository.updateProprietario(client)
}
async function deleteProprietario(id) {
  const animals = await AnimalRepository.getAnimalsByOwner(id)
  if (animals.length === 0) {
    return await ProprietarioRepository.deleteProprietario(id)
  }

  throw new Error(
    'Este proprietário possui animais cadastrados, portanto não pode ser excluído!'
  )
}

export default {
  createProprietario,
  getProprietario,
  getProprietarios,
  updateProprietario,
  deleteProprietario
}
