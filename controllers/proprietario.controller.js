import ProprietarioService from '../services/proprietario.service.js'

async function createProprietario(req, res, next) {
  try {
    let client = req.body
    if (!client.nome || !client.telefone) {
      throw new Error('Preencher nome e telefone')
    }
    client = await ProprietarioService.createProprietario(client)
    res.send(client)
    logger.info(`POST /client - ${JSON.stringify(client)}`)
  } catch (err) {
    next(err)
  }
}

async function getProprietario(req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietario(req.params.id))
    logger.info('GET /client')
  } catch (err) {
    next(err)
  }
}

async function getProprietarios(req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietarios())
  } catch (err) {
    next(err)
  }
}

async function updateProprietario(req, res, next) {
  try {
    let client = req.body
    if (!client.nome || !client.telefone || !client.proprietarioId) {
      throw new Error('Preencher nome e telefone')
    }
    client = await ProprietarioService.updateProprietario(client)
    res.send(client)
    logger.info(`PUT /client - ${JSON.stringify(client)}`)
  } catch (err) {
    next(err)
  }
}

async function deleteProprietario(req, res, next) {
  try {
    res.send(await ProprietarioService.deleteProprietario(req.params.id))
    res.end()
    logger.info('DELETE /client')
  } catch (err) {
    next(err)
  }
}


export default {
  createProprietario,
  getProprietario,
  getProprietarios,
  deleteProprietario,
  updateProprietario
}
