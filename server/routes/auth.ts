import express from 'express';
const router = express.Router();

import {
    registration,
    login,
    encryptPass,
    access,
    verify,
} from '../controllers/auth';

router.post('/registration', encryptPass, registration);
router.post('/login', encryptPass, login);
router.post('/privat*', verify, access)


export default router;