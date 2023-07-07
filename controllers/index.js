const router = require('express').Router();

const apiRoutes = require('./api');
const viewRoutes = require('./homepageRoutes');
const dashboardRoutes = require('./dashboardRoutes');


router.use('/', viewRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;