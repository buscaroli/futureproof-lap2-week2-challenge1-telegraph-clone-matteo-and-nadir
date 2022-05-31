const db = require('../dbConfig')
const { v4: uuidv4 } = require('uuid')

class Post {
  constructor({ id, title, username, story, link }) {
    this.id = id
    this.title = title
    this.username = username
    this.story = story
    this.link = link
    this.enteredAt = ''
  }

  // get stringDate() {
  //   return this.enteredAt.toString().slice(0, 24)
  // }

  static create({ title, username, story }) {
    return new Promise(async (resolve, reject) => {
      try {
        const link = uuidv4().toString()
        console.log(
          `post.js create -> title: ${title}, username: ${username}, story: ${story}, link: ${link} `
        )
        const now = new Date().toString().slice(0, 16).trim()
        const newPostData = await db.query(
          `INSERT INTO posts (title, username, story, link, enteredat) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
          [title, username, story, link, now]
        )
        // console.log('post.js - create - newPostData -> ', newPostData)
        const newPost = new Post(newPostData.rows[0])
        // console.log('post.js - create - newPost -> ', newPost)
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
        console.log('post.js - getPostByLinkId - postToSend -> ', postToSend)
        resolve(postToSend)
      } catch (err) {
        reject('Post not found.')
      }
    })
  }
}

module.exports = Post
