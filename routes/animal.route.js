import express from 'express'
const router = express.Router()
import AnimalController from '../controllers/animal.controller.js'



router.post('/',AnimalController.createAnimal)
router.put('/',AnimalController.updateAnimal)
router.delete('/:id', AnimalController.deleteAnimal)
router.get('/',AnimalController.getAnimals)
router.get('/:id',AnimalController.getAnimal)

export default router