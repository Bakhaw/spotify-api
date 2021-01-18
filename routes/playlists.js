import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/playlists/:playlistId', async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { access_token } = req.query;
    const options = {
      accessToken: access_token,
      endpoint: `playlists/${playlistId}`,
      queryParams: '',
    };

    const data = await requestToAPI(options);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
