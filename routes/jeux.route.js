import { Router } from 'express';
import {
    createJeux,
    getAllJeux,
    getJeuxById,
    deleteJeux,
    updateJeux,
} from '../controllers/jeux.controller.js';

const router = Router();

router.get('/', getAllJeux);
router.get('/:id', getJeuxById);
router.post('/register', createJeux);
router.put('/:id', updateJeux);
router.delete('/:id', deleteJeux);

export default router;