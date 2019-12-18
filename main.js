const db = require('./server/db/database.js')
const app = require('./server/index.js')
const PORT = 3000

db.sync().then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`listening on port ${PORT}`))
})
