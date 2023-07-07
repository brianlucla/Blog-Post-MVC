const router = require('express').Router();

const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');
const blogRoutes = require('./api/blogRoutes');


router.use('/', viewRoutes);
router.use('/api', apiRoutes);
router.use('/api/blog', blogRoutes);

module.exports = router;