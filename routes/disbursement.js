import express from 'express';
import requireAuth from '../middlewares/require_authentication';
const router = express.Router();

import { Disbursement } from '../controllers';

router.post('/create', Disbursement.disbursemen_create);

router.put('/:id/update', requireAuth, Disbursement.disbursemen_update);

router.delete('/:id/delete', Disbursement.disbursemen_delete);

router.get('/', requireAuth, Disbursement.disbursemen_getAll);

export default router;