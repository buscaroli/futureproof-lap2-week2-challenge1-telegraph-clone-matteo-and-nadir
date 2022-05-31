function addPost(title, username, story) {
  const newPost = {
    title: 'title',
    username: 'username',
    story: 'my story hardcoded',
    link: 'sdsddsdss',
  }

  console.log(newPost)

  fetch('http://localhost:3000/posts/', {
    method: 'POST',
    body: newPost,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    console.log('sent data')
    // window.location.reload()
  })
}
