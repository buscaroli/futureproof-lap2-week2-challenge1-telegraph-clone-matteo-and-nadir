const { request } = require('../server')

describe('posts', () => {
  let api

  beforeEach(async () => {
    await resetTestDB()
  })

  beforeAll(async () => {
    api = app.listen(5000, () =>
      console.log('Test server up and running on port 5000...')
    )
  })

  it('should return a specific post based on the link field', async () => {
    let link = 'w2te-2gr5-wr3d'
    const response = await request(api).get(`/dogs/${link}`)
    expect(response.body.name).toEqual('Susan')
  })

  it('should add a new post', async () => {
    const newPost = {
      title: 'Mrs',
      name: 'Robinson',
      story: 'As the song says...',
      link: 'e23f-f5s4-e81m',
    }

    const response = await request(api).post('/dogs')
    expect(response).toBe(201)
  })
})
