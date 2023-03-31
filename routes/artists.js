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

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get('/artists/:artistId/albums', async (req, res) => {
  try {
    const { artistId } = req.params;
    const { access_token, album_type } = req.query;
    const options = {
      accessToken: access_token,
      endpoint: `artists/${artistId}/albums`,
      queryParams: `?include_groups=${album_type}&limit=50`,
    };

    const { data } = await requestToAPI(options);

    const seen = new Set();
    const filteredArr = data.items.filter((el) => {
      const duplicate = seen.has(el.name);
      seen.add(el.name);
      return !duplicate;
    });

    const result = filteredArr.map((album) => ({
      album_type: album.album_type,
      artists: album.artists,
      id: album.id,
      images: album.images,
      name: album.name,
      release_date: album.release_date,
      release_date_shorten: album.release_date.substring(0, 4), // 2019-06-21 => 2019
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
