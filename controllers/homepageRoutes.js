const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');

router.get('/', async(req, res) => {
  // find all posts from all users
  try {
   const postData = await Blogpost.findAll({
    include:[User],
   });

   const posts = postData.map((post)=>{
    post.get({plain:true});
   });
   res.render('all-posts', post);
   
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/blogpost/:id', async(req, res)=>{
  try {
    const postData = await Blogpost.findByPk({
      where:{id:req.params.id},
      include:[User, {model: Comment, include:[User]}],
    });

    const post = postData.get({plain:true});
    res.render('single-post', post);
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