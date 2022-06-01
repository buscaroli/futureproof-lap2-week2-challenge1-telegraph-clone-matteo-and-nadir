const db = require('../dbConfig')
const { v4: uuidv4 } = require('uuid')

class Post {
  constructor({ id, title, username, story, link, enteredat }) {
    this.id = id
    this.title = title
    this.username = username
    this.story = story
    this.link = link
    this.enteredat = enteredat
  }

  static create({ title, username, story }) {
    return new Promise(async (resolve, reject) => {
      try {
        const link = uuidv4().toString()

        const now = new Date()
        const nowString = now.toString().slice(0, 16).trim()

        const newPostData = await db.query(
          `INSERT INTO posts (title, username, story, link, enteredat) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
          [title, username, story, link, nowString]
        )

        const newPost = new Post(newPostData.rows[0])

        resolve(newPost)
      } catch (err) {
        reject('Could not create the post.')
      }
    })
  }

  static getPostByLinkId(link) {
    return new Promise(async (resolve, reject) => {
      try {
        let targetPost = await db.query(
          `SELECT * FROM posts WHERE link=($1);`,
          [link]
        )
        const postToSend = targetPost.rows[0]

        resolve(postToSend)
      } catch (err) {
        reject({ error: 'Post not found.' })
      }
    })
  }
}

module.exports = Post
