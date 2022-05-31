(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const form = document.querySelector('form')
const title = document.querySelector('#title')
const username = document.querySelector('#name')
const story = document.querySelector('#story')
const submitBtn = document.querySelector('#publish')
const date = document.querySelector('#date')

const pathArray = window.location.pathname.split('/')
const linkId = pathArray[pathArray.length - 1]
console.log(linkId)

// window.onload = function (e) {
//   e.preventDefault()
//   alert(linkId)
//   getPost(linkId)
// }

window.addEventListener('mousedown', function (e) {
  e.preventDefault()
  console.log(linkId)
  getPost(linkId)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const dataToDisplay = addPost(title.value, username.value, story.value)
  console.log('dataToDisplay: ', dataToDisplay)
})

},{}]},{},[1]);
