import Servico from '../models/servico.model.js'
import Proprietario from '../models/proprietario.model.js'
import Animal from '../models/animal.model.js'

//1
async function createServico(servico) {
  try {
    return await Servico.create(servico)
  } catch (err) {
    throw err
  }
}

//opcional
async function getServico(id) {
  try {
    return await Servico.findByPk(id)
  } catch (err) {
    throw err
  }
}

//2
async function getServicos() {
  try {
    return await Servico.findAll()
  } catch (err) {
    throw err
  }
}

async function getServicosByOwner(proprietarioId) {
  try {
    return await Servico.findAll({
      include: [
        { model: Animal, include: [Proprietario], where: { proprietarioId } }
      ]
    })
  } catch (err) {
    throw err
  }
}

//opcional
async function updateServico(servico) {
  try {
    await Servico.update(servico, { where: { servicoId: servico.servicoId } })
    return await getServico(servico.servicoId)
  } catch (err) {
    throw err
  }
}

//opcional
async function deleteServico(id) {
  try {
    await Servico.destroy({
      where: { servicoId: id }
    })
  } catch (err) {
    throw err
  }
}

export default {
  createServico,
  getServico,
  getServicosByOwner,
  getServicos,
  updateServico,
  deleteServico
}
