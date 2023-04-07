import ServicoRepository from '../repositories/servico.repository.js'
import ProprietarioRepository from '../repositories/proprietario.repository.js'
import AnimalRepository from '../repositories/animal.repository.js'

async function createServico(servico) {
  return await ServicoRepository.createServico(servico)
}
async function getServico(id) {
  return await ServicoRepository.getServico(id)
}

async function getServicos(proprietarioId) {
  if (proprietarioId) {
    return await ServicoRepository.getServicosByOwner(proprietarioId)
  }
  return await ServicoRepository.getServicos()
}
async function updateServico(servico) {
  const animal = await AnimalRepository.getAnimal(
    servico.animalId
  )
  if (animal) {
    return await ServicoRepository.updateServico(servico)
  }

  throw new Error('Id de proprietário não encontrado')
}
async function deleteServico(id) {
  return await ServicoRepository.deleteServico(id)
}

export default {
  createServico,
  getServico,
  getServicos,
  updateServico,
  deleteServico
}
