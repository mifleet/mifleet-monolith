import {  Router } from 'express';
import { loginView } from './login';
import { registerView } from './register';

const router = Router()

router.post('/register/', registerView);
router.post('/login/', loginView);

export default router;
