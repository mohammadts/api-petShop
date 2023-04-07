import AnimalService from '../services/animal.service.js'

async function createAnimal(req, res, next) {
  try {
    let animal = req.body
    if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
      throw new Error('Preencher nome, tipo e proprietário')
    }
    animal = await AnimalService.createAnimal(animal)
    res.send(animal)
    logger.info(`POST /animal - ${JSON.stringify(animal)}`)
  } catch (err) {
    next(err)
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id))
    logger.info('GET /animal')
  } catch (err) {
    next(err)
  }
}

async function getAnimals(req, res, next) {
  try {
    res.send(await AnimalService.getAnimals(req.query.proprietarioId))
  } catch (err) {
    next(err)
  }
}


async function updateAnimal(req, res, next) {
  try {
    let animal = req.body
    if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
      throw new Error('Preencher nome e telefone')
    }
    animal = await AnimalService.updateAnimal(animal)
    res.send(animal)
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`)
  } catch (err) {
    next(err)
  }
}

async function deleteAnimal(req, res, next) {
  try {
    res.send(await AnimalService.deleteAnimal(req.params.id))
    res.end()
    logger.info('DELETE /animal')
  } catch (err) {
    next(err)
  }
}

export default {
  createAnimal,
  getAnimal,
  getAnimals,
  deleteAnimal,
  updateAnimal
}
