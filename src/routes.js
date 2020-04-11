import { Router } from 'express';

import StaticPagesController from './controllers/StaticPagesController';

const router = Router();

router.get('/', StaticPagesController.index);
router.post('/contact', StaticPagesController.contact);

export default router;
