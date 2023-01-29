import axios from 'axios';

import config from '../config';
import { apiResponse } from './apiReponse';

const { AXIOS_CONFIG, SPOTIFY_CONFIG } = config;
const { apiBaseUrl } = SPOTIFY_CONFIG;

export async function requestToAPI({ accessToken, endpoint, queryParams }) {
  try {
    const url = `${apiBaseUrl}/${endpoint}/${queryParams}`;

    // console.log({ url });

    const data = await axios.get(url, AXIOS_CONFIG(accessToken));

    const response = apiResponse({
      error: null,
      items: data.data.items,
      status: data.status,
    });

    console.log('SUCCESS - requestToApi:', data.data.items);

    return response;
  } catch (err) {
    const response = apiResponse({
      items: null,
      error: err.response.data.error,
      status: err.response.status,
    });

    // console.log('ERROR - requestToApi:', response);

    return response;
  }
}
