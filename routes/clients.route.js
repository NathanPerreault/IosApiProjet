import { Router } from 'express';
import {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} from '../controllers/clients.controller.js';

const router = Router();

router.get('/', getAllClients);
router.get('/:id', getClientById);
router.post('/register', createClient);
router.put('/profile', updateClient);
router.delete('/logout', deleteClient);

export default router;
