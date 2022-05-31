const form = document.querySelector('form')
const title = document.querySelector('#title')
const username = document.querySelector('#name')
const story = document.querySelector('#story')
const submitBtn = document.querySelector('#publish')
const date = document.querySelector('#date')

const pathArray = window.location.pathname.split('/')
const linkId = pathArray[pathArray.length - 1]
console.log(linkId)

// if (linkId !== '') window.onload = getPost

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const dataToDisplay = addPost(title.value, username.value, story.value)
  console.log('dataToDisplay: ', dataToDisplay)
})
