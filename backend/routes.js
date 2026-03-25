import { Router } from 'express';
import postRoutes from "./module/post/post.route.js";
const router = Router();

router.use('/posts', postRoutes);

export default router;