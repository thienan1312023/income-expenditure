import express from 'express';
const router = express.Router();

import { User } from '../controllers';

router.post('/signup', User.user_signup);

router.post('/login', User.user_login);

router.post('/create', User.user_create);

router.put('/:id/update', User.user_update);

router.delete('/:id/delete', User.user_delete);

router.get('/', User.user_getAll);

router.get('/search', User.user_searchText);

export default router;