const router = require('express').Router();
const { Blogpost } = require('../../models');

router.post('/', async (req, res)=>{
  try {
    const blogPostData = await Blogpost.create({
      blog_title: req.body.blog_title,
      blog_content: req.body.blog_content,
      user_id: req.session.userId,
    });
    res.json(blogPostData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id);
    res.json(blogPostData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async(req, res)=>{
  try {
    const [blogPostData] = await Blogpost.update(
      {blog_content: req.body.blog_content}, 
      {where:{id:req.params.id}},
    );
    if (blogPostData === 0){
      res.status(404).json({message: 'Blog post not found!'});
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async(req, res)=>{
  try {
    const [blogPostData] = await Blogpost.destroy({
      where:{id:req.params.id},
    });
    if (blogPostData ===0){
      res.status(404).json({message:'Blog post not found!'});
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;