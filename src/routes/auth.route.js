const express = require('express');
const { registerUserController, loginUserController, logoutController, getCurrentUser } = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/me', authMiddleware, getCurrentUser);

router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.post('/logout', authMiddleware, logoutController);



module.exports = router;