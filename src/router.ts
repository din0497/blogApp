import express from 'express';
const router = express.Router();
import blogController from './controllers/blog.controller'

router.get('/get-create-blog', blogController.getCreateBlog)

router.post('/create-blog', blogController.createNewBlog)

export default router
