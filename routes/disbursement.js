import express from 'express';
import requireAuth from '../middlewares/require_authentication';
const router = express.Router();

import { Disbursement } from '../controllers';

router.post('/create', Disbursement.disbursement_create);

router.put('/:id/update', requireAuth, Disbursement.disbursement_update);

router.delete('/:id/delete', Disbursement.disbursement_delete);

router.get('/', requireAuth, Disbursement.disbursement_getAll);

export default router;