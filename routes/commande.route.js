import { Router } from 'express';
import {
    createCommande,
    getAllCommande,
    getCommandeById,
    deleteCommande,
    updateCommande,
} from '../controllers/commande.controller.js';

const router = Router();

router.get('/', getAllCommande);
router.get('/:id', getCommandeById);
router.post('/register', createCommande);
router.put('/:id',     updateCommande);
router.delete('/:id', deleteCommande);

export default router;