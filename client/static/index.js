const app = require('./app')

const form = document.querySelector('form')
const title = document.querySelector('#title')
const name = document.querySelector('#name')
const story = document.querySelector('#story')
const submitBtn = document.querySelector('#publish')

const pathArray = window.location.pathname.split('/')
const linkId = pathArray[-1]
console.log(linkId)
