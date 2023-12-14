import { Router } from 'express';
import {
    createPanier,
    getAllPanier,
    getPanierById,
    deletePanier,
    updatePanier,
} from '../controllers/panier.controller.js';

const router = Router();

router.get('/', getAllPanier);
router.get('/:id', getPanierById);
router.post('/register', createPanier);
router.put('/:id',     updatePanier);
router.delete('/:id', deletePanier);

export default router;