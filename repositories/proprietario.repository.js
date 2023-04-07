
import Proprietario from '../models/proprietario.model.js'

async function createProprietario(client) {
  try {
    return await Proprietario.create(client)
  } catch (err) {
    throw err
  }
}

async function getProprietario(id) {
  try {
    return await Proprietario.findByPk(id)
  } catch (err) {
    throw err
  }
}

async function getProprietarios() {
  try {
    return await Proprietario.findAll()
  } catch (err) {
    throw err
  }
}

async function updateProprietario(client) {
  try {
    await Proprietario.update(client, {
      where: { proprietarioId: client.proprietarioId }
    })
    return await getProprietario(client.proprietarioId)
  } catch (err) {
    throw err
  }
}

async function deleteProprietario(id) {
  try {
await Proprietario.destroy({where:{proprietarioId: id}})
  } catch (err) {
    throw err
  }
}

export default {
  createProprietario,
  getProprietario,
  getProprietarios,
  updateProprietario,
  deleteProprietario
}
