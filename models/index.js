const User = require("./User.js");
const Blogpost = require('./Blogpost.js');
const Comment = require('./Comment.js');

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Blogpost.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});


Blogpost.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Blogpost,{
  foreignKey:'blog_id',
  onDelete:'CASCADE'
});

module.exports = { User, Blogpost, Comment };
