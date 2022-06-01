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
  const linkId = address[address.length - 1]

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
        window.location.href = window.location.href + '?' + data.link
      })
  } else {
    alert('Please fill all fields and make sure the data is not too long!')
    populateFields({ title: '', username: '', story: '', enteredat: '' })
  }
}

function getPost(linkId) {
  fetch(`http://localhost:3000/posts/${linkId}`)
    .then((response) => response.json())
    .then((data) => {
      populateFields(data)
    })
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
