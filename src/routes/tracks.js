import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI.js';

const router = Router();

router.get('/tracks/is-saved', async (req, res) => {
  try {
    const { access_token, ids } = req.query;

    const options = {
      method: 'GET',
      accessToken: access_token,
      endpoint: `me/tracks/contains`,
      queryParams: `?ids=${ids}`,
    };

    const data = await requestToAPI(options);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.put('/tracks/save-track', async (req, res) => {
  try {
    const { access_token, ids } = req.query;

    const options = {
      method: 'PUT',
      accessToken: access_token,
      endpoint: `me/tracks`,
      queryParams: `?ids=${ids}`,
    };

    const data = await requestToAPI(options);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.delete('/tracks/remove-track', async (req, res) => {
  try {
    const { access_token, ids } = req.query;

    const options = {
      method: 'DELETE',
      accessToken: access_token,
      endpoint: `me/tracks`,
      queryParams: `?ids=${ids}`,
    };

    const data = await requestToAPI(options);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
