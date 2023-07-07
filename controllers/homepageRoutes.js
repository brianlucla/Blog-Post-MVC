const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');

router.get('/', async(req, res) => {
  // find all posts from all users
  try {
   const blogPostData = await Blogpost.findAll({
    include:[User],
   });

   const blogs = blogPostData.map((blog)=>{
    blogs.get({plain:true});
   });
   res.render('all-posts', { layout: 'main', blogs });
   
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/blogpost/:id', async(req, res)=>{
  try {
    const blogPostData = await Blogpost.findByPk({
      where:{id:req.params.id},
      include:[User, {model: Comment, include:[User]}],
    });

    const blog = blogPostData.get({plain:true});
    res.render('single-post', blog);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;