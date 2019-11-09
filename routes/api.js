import express from 'express';
const router = express.Router();
const requireAuth = require('../middlewares/require_authentication');

router.use('/user', require('./user'));
router.use('/devotion', require('./devotion'));
router.use('/disbursement', require('./disbursement'));
export default router;