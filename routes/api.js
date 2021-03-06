import express from 'express';
const router = express.Router();
import user from './user';
import devotion from './devotion';
import disbursement from './disbursement';

router.use('/user', user);
router.use('/devotion', devotion);
router.use('/disbursement', disbursement);
export default router;