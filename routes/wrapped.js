import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

/* 
Three different Time Ranges available: long_term (all time), short_term (4 weeks), medium_term (6 months)
Testing: https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/
*/
router.get('/wrapped/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const { access_token, time_range } = req.query;
    const options = {
      accessToken: access_token,
      endpoint: `me/top/${type}`,
      queryParams: `?time_range=${time_range}`,
    };

    const data = await requestToAPI(options);

    console.log('wrapped::::', req.query);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
