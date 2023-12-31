import { Router } from 'express';
import {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} from '../controllers/client.controller.js';

const router = Router();

router.get('/', getAllClients);
router.get('/:id', getClientById);
router.post('/register', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;