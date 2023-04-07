import PostRepository from '../repositories/post.repository.js'


async function createPost(post) {
  return await PostRepository.createPost(post)
}
async function getPosts() {
  return await PostRepository.getPosts()
}

async function createComentario(comentario) {
  return await PostRepository.createComentario(comentario)
}

export default {
  createPost,
  getPosts,
  createComentario
}
