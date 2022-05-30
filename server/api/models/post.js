const db = require('../dbConfig')
import { v4 as uuidv4 } from 'uuid'

class Post {
  constructor({ id, title, name, story, link }) {
    this.id = id
    this.title = title
    this.name = name
    this.story = story
    this.link = link
  }
}
