import express from 'express';
import requireAuth from '../middlewares/require_authentication';
const router = express.Router();

const disbursemen_controller = require('../controllers/memo');

router.post('/create', disbursemen_controller.disbursemen_create);

router.put('/:id/update', requireAuth, disbursemen_controller.disbursemen_update);

router.delete('/:id/delete', disbursemen_controller.disbursemen_delete);

router.get('/', requireAuth, disbursemen_controller.disbursemen_getAll);

export default router;