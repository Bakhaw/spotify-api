import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/artists/:artistId', async (req, res) => {
  try {
    const { artistId } = req.params;
    const { access_token } = req.query;
    const options = {
      accessToken: access_token,
      endpoint: `artists/${artistId}`,
      queryParams: '',
    };

    const data = await requestToAPI(options);

    const { followers, genres, id, images, name, popularity, type, uri } = data;
    const result = {
      followers: followers.total,
      genres,
      id,
      image: images[0].url, // 1000x1000 resolution
      name,
      popularity,
      type,
      uri,
    };

    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.get('/artists/:artistId/albums', async (req, res) => {
  try {
    const { artistId } = req.params;
    const { access_token } = req.query;
    const options = {
      accessToken: access_token,
      endpoint: `artists/${artistId}/albums`,
      queryParams: '?include_groups=album',
    };

    const data = await requestToAPI(options);

    const result = data.items.map((album) => ({
      artists: album.artists,
      id: album.id,
      image: album.images[0].url, // 640x640 resolution
      name: album.name,
      release_date: album.release_date,
      total_tracks: album.total_tracks,
      type: album.type,
      uri: album.uri,
    }));

    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

export default router;
