const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async(req, res) => {
  try {
    const commentData = await Comment.create({
      content:req.body.content,
      user_id: req.session.userId,
    });
    res.json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;