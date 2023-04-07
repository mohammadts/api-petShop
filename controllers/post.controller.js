import PostService from '../services/post.service.js'

async function createPost(req, res, next) {
  try {
    let post = req.body
    if (!post.titulo || !post.conteudo) {
      throw new Error('Preencher titulo e conteudo')
    }
    await PostService.createPost(post)
    res.send(post)
    logger.info(`POST /post - ${JSON.stringify(post)}`)
  } catch (err) {
    next(err)
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts())
  } catch (err) {
    next(err)
  }
}

async function createComentario(req, res, next) {
  try {
    let comentario = req.body
    if (!comentario.postId || !comentario.nome || !comentario.conteudo) {
      throw new Error('Preencher nome e conteudo')
    }
    await PostService.createComentario(comentario)
    res.send(comentario)
    logger.info(`POST /comentario - ${JSON.stringify(comentario)}`)
  } catch (err) {
    next(err)
  }
}

export default {
  createPost,
  getPosts,
  createComentario
}
