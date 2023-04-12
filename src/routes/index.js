import { Router } from 'express';

import authRouter from './auth.js';
import albumsRouter from './albums.js';
import artistsRouter from './artists.js';
import meRouter from './me.js';
import playerRouter from './player.js';
import playlistRouter from './playlists.js';
import recentRouter from './player.js';
import searchRouter from './search.js';
import topRouter from './top.js';
import tracksRouter from './tracks.js';

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
