const formEl = document.querySelector('form')
const titleEl = document.querySelector('#title')
const usernameEl = document.querySelector('#name')
const storyEl = document.querySelector('#story')
const submitBtn = document.querySelector('#publish')
const dateEl = document.querySelector('#date')

window.onload = onLoad

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  addPost(titleEl.value, usernameEl.value, storyEl.value)
})

function onLoad(e) {
  e.preventDefault()

  const address = window.location.href.split('?')
  console.log('address.length', address.length)
  const linkId = address[address.length - 1]
  console.log(linkId)

  if (address.length > 1) {
    getPost(linkId)
  }
}

function checkDataIsValid() {
  if (
    titleEl.value !== '' &&
    usernameEl.value !== '' &&
    storyEl.value !== '' &&
    titleEl.value.length <= 100 &&
    usernameEl.value.length <= 50 &&
    storyEl.value.length <= 2000
  )
    return true
  return false
}

function addPost(title, username, story) {
  const newPost = {
    title,
    username,
    story,
    link: '',
  }

  console.log(newPost)

  if (checkDataIsValid()) {
    fetch('http://localhost:3000/posts/', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('sent data, link is ', data.link)
        // console.log('data -> ', data)

        window.location.href = window.location.href + '?' + data.link
        // console.log('protocol', window.location.protocol)
        // console.log('hostname', window.location.hostname)
        // console.log('port', window.location.port)
        // console.log('href', window.location.href)
        // console.log('ffff', window.location.href + '?' + data.link)
      })
  } else {
    alert('Please fill all fields and make sure the data is not too long!')
    populateFields({ title: '', username: '', story: '', enteredat: '' })
  }
}

function getPost(linkId) {
  console.log(`linkId is ${linkId.length} chars long`)
  console.log(location.href)
  fetch(`http://localhost:3000/posts/${linkId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      populateFields(data)
    })
  // .then((post) => {
  //   console.log('*********** ', post)

  //   // let url = window.location.href
  //   // let newUrl = url + `?${linkId}`
  //   // window.open(newUrl, '_self')
  // })
}

function populateFields({ title, username, story, enteredat }) {
  titleEl.value = title
  usernameEl.value = username
  storyEl.value = story
  dateEl.textContent = enteredat
}

function toggleForm(elem) {
  if (elem.display === 'flex') {
    elem.display = 'none'
  } else {
    elem.display = 'flex'
  }
}
