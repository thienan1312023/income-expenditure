import express from 'express';
import requireAuth from '../middlewares/require_authentication';
const router = express.Router();

const devotion_controller = require('../controllers/memo');

router.post('/create', devotion_controller.devotion_create);

router.put('/:id/update', requireAuth, devotion_controller.devotion_update);

router.delete('/:id/delete', devotion_controller.devotion_delete);

router.get('/', requireAuth, devotion_controller.devotion_getAll);

module.exports = router;