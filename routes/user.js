import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/me', async (req, res) => {
  try {
    const { access_token } = req.query;
    const options = {
      accessToken: access_token,
      endpoint: `me`,
      queryParams: '',
    };

    const data = await requestToAPI(options);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get('/me/tracks/is-saved', async (req, res) => {
  try {
    const { access_token, ids } = req.query;

    const options = {
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

export default router;
