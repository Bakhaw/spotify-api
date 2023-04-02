import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/search', async (req, res) => {
  try {
    const { access_token, query, type } = req.query;
    const options = {
      method: 'GET',
      accessToken: access_token,
      endpoint: 'search',
      queryParams: `?q=${query}&type=${type}`,
    };

    const data = await requestToAPI(options);

    // 401 status code means the access_token has expired
    if (data.response?.status === 401) {
      console.log('Access token has expired !', data.response.data);
      res.send(data.response.data.error);
    } else {
      const result = data.artists.items.map((item) => ({
        externalUrl: item.external_urls?.spotify,
        followers: item.followers?.total,
        genres: item.genres,
        href: item.href,
        id: item.id,
        image: item.images?.length ? item.images[0]?.url : null,
        name: item.name,
        popularity: item.popularity,
        type: item.type,
        uri: item.uri,
      }));

      res.send(result);
    }
  } catch (error) {
    res.send(error);
  }
});

export default router;
