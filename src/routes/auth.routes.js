import express from 'express'
import {login, register} from '../controllers/auth.controller.js'
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/login', login)
router.post('/register', register)

export default router