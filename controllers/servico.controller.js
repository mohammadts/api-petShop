import ServicoService from '../services/servico.service.js'

async function createServico(req, res, next) {
  try {
    let servico = req.body
    if (!servico.descricao || !servico.valor || !servico.animalId) {
      throw new Error('Preencher descrição, valor e id do animal')
    }
    servico = await ServicoService.createServico(servico)
    res.send(servico)
    logger.info(`POST /servico - ${JSON.stringify(servico)}`)
  } catch (err) {
    next(err)
  }
}

async function getServico(req, res, next) {
  try {
    res.send(await ServicoService.getServico(req.params.id))
    logger.info('GET /servico')
  } catch (err) {
    next(err)
  }
}

async function getServicos(req, res, next) {
  try {
    res.send(await ServicoService.getServicos(req.query.proprietarioId))
  } catch (err) {
    next(err)
  }
}


async function updateServico(req, res, next) {
  try {
    let servico = req.body
    if (!servico.servicoId || !servico.descricao || !servico.valor || !servico.animalId)  {
      throw new Error('Preencher descricao e valor')
    }
    servico = await ServicoService.updateServico(servico)
    res.send(servico)
    logger.info(`PUT /servico - ${JSON.stringify(servico)}`)
  } catch (err) {
    next(err)
  }
}

async function deleteServico(req, res, next) {
  try {
    res.send(await ServicoService.deleteServico(req.params.id))
    res.end()
    logger.info('DELETE /servico')
  } catch (err) {
    next(err)
  }
}

export default {
  createServico,
  getServico,
  getServicos,
  deleteServico,
  updateServico
}
