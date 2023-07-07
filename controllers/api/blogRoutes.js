const router = require('express').Router();
const { Blogpost } = require('../../models');

router.post('/', async (req, res)=>{
  try {
    const blogpostData = await Blogpost.create({
      blog_title:req.body.blog_title,
      blog_content:req.body.blog_content,
      user_id:req.session.user_id,
    });
    res.json(blogpostData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async(req, res)=>{
  try {
    const blogPostData = await Blogpost.update({
      blog_content:req.body,
      where:{id:req.params.id},
    })
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async(req, res)=>{
  try {
    const blogpostData = await Blogpost.destroy({
      where:{id:req.params.id},
    })
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;