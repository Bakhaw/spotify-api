import axios from 'axios';

import config from '../config';
import { apiResponse } from './apiReponse';

const { AXIOS_CONFIG, SPOTIFY_CONFIG } = config;
const { apiBaseUrl } = SPOTIFY_CONFIG;

export async function requestToAPI({
  accessToken,
  endpoint,
  method = 'GET',
  queryParams,
}) {
  try {
    const url = `${apiBaseUrl}/${endpoint}/${queryParams}`;

    const data = await axios({
      method,
      url,
      headers: AXIOS_CONFIG(accessToken).headers,
    });

    const response = apiResponse({
      data: data.data,
      error: null,
      status: data.status,
    });

    // console.log('SUCCESS - requestToApi:', data.data);

    return response;
  } catch (err) {
    const response = apiResponse({
      data: null,
      error: err.response.data.error,
      status: err.response.status,
    });

    // console.log('ERROR - requestToApi:', response);

    return response;
  }
}
