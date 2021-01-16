import { Router } from 'express';

import config from '../config';

const router = Router();

const { authEndpoint, clientID, redirectUri, scopes } = config.SPOTIFY_CONFIG;

router.get('/auth/token', async (req, res) => {
  try {
    const authorizeAuthURL =
      authEndpoint +
      `?client_id=${clientID}` +
      `&redirect_uri=${redirectUri}` +
      `&scope=${scopes.join('%20')}` +
      '&response_type=token';

    res.redirect(authorizeAuthURL);
  } catch (err) {
    res.send(err);
  }
});

export default router;
