import { Router } from 'express';
import { join } from 'path';
const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).sendFile(join(__dirname, '../../../frontend/public/index.html'));
});

export default router;
