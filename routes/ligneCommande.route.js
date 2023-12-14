import { Router } from 'express';
import {
    createLigneCommande,
    DeleteLigneCommande,
    
  
} from '../controllers/commande.controller.js';

const router = Router();

router.get('/client', getClientCommandes);
router.get('/:id', getCommandeByNumero);
router.post('/register', createCommande);


export default router;