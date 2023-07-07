const router = require('express').Router();
const { Comment } = require('../../models');

router.create('/', async(req, res) => {
  try {
    const commentData = await Comment.create()
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;