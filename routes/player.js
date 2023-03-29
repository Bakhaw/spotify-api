import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/recent', async (req, res) => {
  try {
    const { access_token } = req.query;
    const options = {
      accessToken: access_token,
      endpoint: 'me/player/recently-played',
      queryParams: '',
    };

    const data = await requestToAPI(options);

    // console.log('recently played:', data);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
