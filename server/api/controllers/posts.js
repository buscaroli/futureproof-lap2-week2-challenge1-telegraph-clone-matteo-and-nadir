const express = require('express')
const router = express.Router()

const Post = require('../models/post')

router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body)

    res.status(201).send(JSON.stringify(post))
  } catch (err) {
    res.status(400).json({ err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const retrievedPost = await Post.getPostByLinkId(req.params.id)
    const postToSend = JSON.stringify(retrievedPost)

    res.send(postToSend)
  } catch (err) {
    res.status(404).send({ error: 'Post not Found.' })
  }
})

module.exports = router
