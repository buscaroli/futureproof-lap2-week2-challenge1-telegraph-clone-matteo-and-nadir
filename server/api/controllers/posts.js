const express = require('express')
const router = express.Router()

const Post = require('../models/post')

router.post('/', async (req, res) => {
  try {
    console.log('posts.js - post - req.body -> ', req.body)
    const post = await Post.create(req.body)
    console.log('posts.js - post - post -> ', post)
    res.status(201).send(post)
  } catch (err) {
    // 406 - Not Acceptable
    res.status(406).json({ err })
  }
})

module.exports = router
