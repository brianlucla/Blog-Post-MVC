const router = require('express').Router();
const { Blogpost } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogPostData = await Blogpost.findAll({
      where:{
        user_id: req.session.userId,
      },
    });
    const blogs = blogPostData.map((blog)=>{
      blog.get({plain:true});
    });
    res.render('user-posts', { layout:'dashboard', blogs}); 
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/newpost', async (req, res) => {
  try {
    res.render('new-post',{
      layout:'dashboard',
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
