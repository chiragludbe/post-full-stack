import { Router } from 'express';
import * as postController from "./post.controller.js";
const { createPost, getPosts, getPostBySlug } = postController;

const router = Router();

router.get('/', getPosts);
router.get('/:slug', getPostBySlug);
router.post('/', createPost);

export default router;
