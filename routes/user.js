import express from 'express';
const router = express.Router();

import { User } from '../controllers';

router.post('/signup', User.user_signup);

router.post('/login', User.user_login);

module.exports = router;