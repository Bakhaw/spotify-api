import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/albums/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const { access_token } = req.query;
    const options = {
      method: 'GET',
      accessToken: access_token,
      endpoint: `albums/${albumId}`,
      queryParams: '',
    };

    const data = await requestToAPI(options);

    const result = {
      artists: data.artists,
      copyrights: data.copyrights,
      image: data.images[0].url,
      label: data.label,
      name: data.name,
      popularity: data.popularity,
      release_date: data.release_date,
      total_tracks: data.total_tracks,
      tracks: data.tracks,
      uri: data.uri,
    };

    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

export default router;
