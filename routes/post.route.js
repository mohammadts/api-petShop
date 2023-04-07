import express from 'express'
const router = express.Router()
import PostController from '../controllers/post.controller.js'


router.post('/',PostController.createPost)
router.get('/',PostController.getPosts)
router.post('/comentario',PostController.createComentario)


export default router