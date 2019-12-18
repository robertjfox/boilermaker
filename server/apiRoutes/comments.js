const router = require('express').Router()
const Comment = require('../db/models.js')

router.get('/', async (req, res, next) => {
  try {
    const allComments = await Comment.findAll()
    res.send(allComments)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const content = req.body
    const newComment = await Comment.create(content)
    res.send(newComment)
  } catch (error) {
    next(error)
  }
})

module.exports = router
