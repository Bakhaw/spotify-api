import { Router } from 'express';

import authRouter from './auth';
import albumsRouter from './albums';
import artistsRouter from './artists';
import searchRouter from './search';

const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome on Spotify API !' });
});

router.use(authRouter);
router.use(albumsRouter);
router.use(artistsRouter);
router.use(searchRouter);

export default router;
