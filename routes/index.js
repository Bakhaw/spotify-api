import { Router } from 'express';

import authRouter from './auth';
import albumsRouter from './albums';
import artistsRouter from './artists';
import meRouter from './me';
import playerRouter from './player';
import playlistRouter from './playlists';
import recentRouter from './player';
import searchRouter from './search';
import topRouter from './top';
import tracksRouter from './tracks';

const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome on Spotify API !' });
});

router.use(authRouter);
router.use(albumsRouter);
router.use(artistsRouter);
router.use(meRouter);
router.use(playlistRouter);
router.use('/player', playerRouter);
router.use(recentRouter);
router.use(searchRouter);
router.use(topRouter);
router.use(tracksRouter);

export default router;
