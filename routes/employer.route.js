import { Router } from 'express';
import {
    createEmployer,
    getAllEmployer,
    getEmployerById,
    deleteEmployer,
    updateEmployer,
} from '../controllers/employer.controller.js';

const router = Router();

router.get('/', getAllEmployer);
router.get('/:id', getEmployerById);
router.post('/register', createEmployer);
router.put('/:id', updateEmployer);
router.delete('/:id', deleteEmployer);

export default router;