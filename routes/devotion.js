import express from 'express';
import requireAuth from '../middlewares/require_authentication';
const router = express.Router();

import { Devotion } from '../controllers';

router.post('/create', Devotion.devotion_create);

router.put('/:id/update', requireAuth, Devotion.devotion_update);

router.delete('/:id/delete', Devotion.devotion_delete);

router.get('/', Devotion.devotion_getAll);

export default router;