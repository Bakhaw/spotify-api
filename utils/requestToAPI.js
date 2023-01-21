import axios from 'axios';

import config from '../config';

const { AXIOS_CONFIG, SPOTIFY_CONFIG } = config;
const { apiBaseUrl } = SPOTIFY_CONFIG;

export async function requestToAPI({ accessToken, endpoint, queryParams }) {
  try {
    const url = `${apiBaseUrl}/${endpoint}/${queryParams}`;

    const { data } = await axios.get(url, AXIOS_CONFIG(accessToken));

    return data;
  } catch (err) {
    return err;
  }
}
