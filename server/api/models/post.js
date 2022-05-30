const db = require('../dbConfig')
const { v4: uuidv4 } = require('uuid')

class Post {
  constructor({ id, title, name, story, link }) {
    this.id = id
    this.title = title
    this.name = name
    this.story = story
    this.link = link
  }

  static create({ title, username, story }) {
    return new Promise(async (resolve, reject) => {
      try {
        let link = uuidv4().toString()
        // console.log(
        //   `post.js create -> title: ${title}, username: ${username}, story: ${story}, link: ${link} `
        // )
        let newPostData = await db.query(
          `INSERT INTO posts (title, username, story, link) VALUES ($1, $2, $3, $4) RETURNING *;`,
          [title, username, story, link]
        )
        // console.log('post.js - create - newPostData -> ', newPostData)
        let newPost = new Post(newPostData.rows[0])
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
