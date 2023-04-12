import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI.js';

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

    const { data } = await requestToAPI(options);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
