import { Router } from 'express';
import {
    createJeu,
    getAllJeux,
    getJeuById,
    deleteJeu,
    updateJeu,
} from '../controllers/jeu.controller.js';

const router = Router();

router.get('/jeux', getAllJeux);
router.get('/:id', getJeuById);
router.post('/register', createJeu);
router.put('/modifie', updateJeu);
router.delete('/supprime', deleteJeu);

export default router;