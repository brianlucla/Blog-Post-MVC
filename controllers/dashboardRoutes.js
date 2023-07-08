const router = require("express").Router();
const { Blogpost } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findAll({
      where: {
        user_id: req.session.userId,
      },
    });
    const blogs = blogPostData.map((blog) => {
      return blog.get({ plain: true });
    });
    res.render("user-posts", { layout: "dashboard", blogs });
  } catch (error) {
    res.redirect('login');
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id);
    const blog = blogPostData.get({plain:true});
    res.render('edit',{layout:'dashboard', blog});
  } catch (error) {
    res.redirect('login');
  }
});

router.get("/newpost", async (req, res) => {
  try {
    res.render("new-post", {
      layout: "dashboard",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
