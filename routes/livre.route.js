import { Router } from 'express';
import {
    createLivre,
    getAllLivres,
    getLivreById,
    deleteLivre,
    updateLivre,
} from '../controllers/livre.controller.js';

const router = Router();

router.get('/', getAllLivres);
router.get('/:id', getLivreById);
router.post('/register', createLivre);
router.put('/:id',     updateLivre);
router.delete('/:id', deleteLivre);

export default router;