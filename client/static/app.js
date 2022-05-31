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
    return data
  })
}
