import { Router } from 'express';
import {
    getAllProduits,
    getProduitById,
    createProduit,
    updateProduit,
    deleteProduit,
} from '../controllers/produit.controller.js';

const router = Router();

router.get('/', getAllProduits);
router.get('/:id', getProduitById);
router.post('/register', createProduit);
router.put('/:id',     updateProduit);
router.delete('/:id', deleteProduit);

export default router;