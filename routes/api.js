const express = require('express');
const router = express.Router();
const requireAuth = require('../middlewares/require_authentication');

router.use('/user', require('./user'));
router.use('/memos', require('./devotion'));
module.exports = router;