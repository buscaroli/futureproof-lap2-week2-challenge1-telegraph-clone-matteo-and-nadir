function addPost(title, username, story) {
  const newPost = {
    title,
    username,
    story,
    link: '',
  }

  console.log(newPost)

  fetch('http://localhost:3000/posts/', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => {
    console.log('sent data')
  })
}

function getPost(linkId) {
  console.log(`linkId is ${linkId.length} chars long`)
  fetch(`http://localhost:3000/posts/${linkId}`)
    .then((response) => response.json())
    .then((data) => JSON.parse(data))
    .then((post) => {
      console.log('*********** ', post)
    })
}
