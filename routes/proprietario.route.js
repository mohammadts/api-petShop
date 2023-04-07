import express from 'express'
const router = express.Router()
import ProprietarioController from '../controllers/proprietario.controller.js'

router.post('/',ProprietarioController.createProprietario)
router.put('/',ProprietarioController.updateProprietario)
router.delete('/:id', ProprietarioController.deleteProprietario)
router.get('/',ProprietarioController.getProprietarios)
router.get('/:id',ProprietarioController.getProprietario)

export default router