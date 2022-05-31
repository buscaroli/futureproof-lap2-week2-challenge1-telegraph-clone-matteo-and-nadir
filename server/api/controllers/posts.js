const express = require('express')
const router = express.Router()

const Post = require('../models/post')

router.post('/', async (req, res) => {
  console.log('posts.js - post - req.body -> ', req.body)
  try {
    const post = await Post.create(req.body)

    console.log('posts.js - post - post -> ', post)
    res.status(201).send(JSON.stringify(post))
  } catch (err) {
    res.status(400).json({ err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    console.log('posts.js - get /:id - req.params.id -> ', req.params.id)
    const retrievedPost = await Post.getPostByLinkId(req.params.id)
    if (!retrievedPost) throw new Error()
    const postToSend = JSON.stringify(retrievedPost)
    res.send(postToSend)
  } catch (err) {
    res.status(404).send({ error: 'Post not Found.' })
  }
})

module.exports = router
