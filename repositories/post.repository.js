import PostSchema from '../schemas/post.schema.js'
import { connect } from './mongo.db.js'

async function createPost(post) {
  try {
    const mongoose = await connect()
    const Post = mongoose.model('Post', PostSchema)
    post = new Post(post)
    await post.save()
  } catch (err) {
    throw err
  }
}

async function createComentario(comentario) {
  try {
    const post = await getPost(comentario.postId)
    console.log(post)
    post.comentarios.push(comentario)
    await updatePost(post)
  } catch (err) {
    throw err
  }
}

async function getPost(postId) {
  try {
    const mongoose = await connect()
    const Post = mongoose.model('Post', PostSchema)
    return await Post.findOne({ _id: postId })
  } catch (err) {
    throw err
  }
}

async function updatePost(post) {
  try {
    const mongoose = await connect()
    const Post = mongoose.model('Post', PostSchema)
    await Post.findOneAndUpdate({ _id: post.id }, post)
  } catch (err) {
    throw err
  }
}

async function getPosts() {
  try {
    const mongoose = await connect()
    const Post = mongoose.model('Post', PostSchema)
    const query = Post.find({})
    return await query.exec()
  } catch (err) {
    throw err
  }
}

export default {
  createPost,
  createComentario,
  getPosts,
  updatePost
}
