(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
  if (titleEl.value !== '' && usernameEl.value !== '' && storyEl.value !== '')
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
        console.log('data -> ', data)
        // populateFields(post.title, post.username, post.story, post.link)
        // window.location.href = `${window.location.protocol}//${window.location.host}/${data.link}`
        // window.location.reload()
        // populateFields(data)
        window.location.href = window.location.href + '?' + data.link
        console.log('protocol', window.location.protocol)
        console.log('hostname', window.location.hostname)
        console.log('port', window.location.port)
        console.log('href', window.location.href)
        console.log('ffff', window.location.href + '?' + data.link)
      })
  } else {
    alert('Please fill all fields!')
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

},{}]},{},[1]);
