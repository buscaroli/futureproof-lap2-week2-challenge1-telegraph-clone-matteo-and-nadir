const express = require('express')
const cors = require('cors')

const server = express()
server.use(cors())
server.use(express.json())

const postRoutes = require('./controllers/posts')
server.use('/posts', postRoutes)

const port = process.env.PORT || 3000

server.get('/', (req, res) => {
  res.send('Welcome to Telegiraff!')
})

module.exports = server
