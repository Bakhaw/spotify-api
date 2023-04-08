import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/playlists', async (req, res) => {
  try {
    const { access_token, limit = 50 } = req.query;

    const options = {
      method: 'GET',
      accessToken: access_token,
      endpoint: 'me/playlists',
      queryParams: `?limit=${limit}`,
    };

    const { data } = await requestToAPI(options);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get('/playlists/:playlistId', async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { access_token } = req.query;
    const options = {
      method: 'GET',
      accessToken: access_token,
      endpoint: `playlists/${playlistId}`,
      queryParams: '',
    };

    const { data } = await requestToAPI(options);

    const result = {
      ...data,
      total_tracks: data.tracks.total,
      tracks: data.tracks.items.map((track) => track.track),
    };

    console.log('data', data);

    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

export default router;
