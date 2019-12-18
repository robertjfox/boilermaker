const Comment = require('./server/db/models.js')
const db = require('./server/db/database.js')

const seedComments = [
  {
    author: 'John Doe',
    content: 'Hey Rob how are ya?'
  },
  {
    author: 'Sarah Smith',
    content: 'Cool Website!'
  }
]

const seed = async () => {
  console.log('seeding the database...')
  await db.sync({ force: true })
  await Comment.bulkCreate(seedComments)
  console.log('Seeding success!')
  db.close()
}

seed().catch(err => {
  console.error('Oh noes! Something went wrong!')
  console.error(err)
  db.close()
})
