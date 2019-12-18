const Sequelize = require('sequelize')
const db = require('./database')

const Comment = db.define('comment', {
  author: {
    type: Sequelize.STRING,
    defaultValue: 'Anonymous',
    validate: {
      notEmpty: true
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Comment
