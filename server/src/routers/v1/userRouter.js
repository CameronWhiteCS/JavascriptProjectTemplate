import express from 'express';
import * as userController from '~/controllers/userController';

const router = express.Router();

router.get('', userController.get);
router.post('', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

export default router;