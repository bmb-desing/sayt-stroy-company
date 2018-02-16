import { Router } from 'express'
import { loginValidation } from '../validation/auth'
import authController from '../controllers/authController'
import authMiddleware from '../middleware/authMiddleware'

const router = Router()

// Mock Users

/* GET users listing. */
router.post('/auth/login', loginValidation, authController.login)
router.post('/auth/logout', authMiddleware.isAuth, authController.logout)
/* GET user by ID. */

export default router
