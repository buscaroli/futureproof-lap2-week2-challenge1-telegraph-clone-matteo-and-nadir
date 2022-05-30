const express = require('express')
const router = express.Router()

const Post = require('../models/post')

router.post('/', async (req, res) => {
  try {
    // console.log('posts.js - post - req.body -> ', req.body)
    const post = await Post.create(req.body)

    // console.log('posts.js - post - post -> ', post)
    res.status(201).send(JSON.stringify(post))
  } catch (err) {
    // 406 - Not Acceptable
    res.status(406).json({ err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    console.log('posts.js - get /:id - req.params.id -> ', req.params.id)
    const retrievedPost = await Post.getPostByLinkId(req.params.id)
    const postToSend = JSON.stringify(retrievedPost)
    res.send(postToSend)
  } catch (err) {
    res.status(404).send({ error: 'Post not found.' })
  }
})

module.exports = router
