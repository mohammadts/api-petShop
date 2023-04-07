import express from 'express'
const router = express.Router()
import ServicoController from '../controllers/servico.controller.js'



router.post('/',ServicoController.createServico)
router.put('/',ServicoController.updateServico)
router.delete('/:id', ServicoController.deleteServico)
router.get('/',ServicoController.getServicos)
router.get('/:id',ServicoController.getServico)

export default router