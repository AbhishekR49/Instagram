const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { createPostController, updatePostController } = require('../controllers/post.controller');
const uploads = require('../config/multer');

const router = express.Router();


router.post('/create', authMiddleware, uploads.array('images',5), createPostController);
router.patch('/update/:postId', authMiddleware,uploads.array('images',5), updatePostController);

module.exports = router;