import axios from 'axios';

import config from '../config';
import { apiResponse } from './apiReponse';

const { AXIOS_CONFIG, SPOTIFY_CONFIG } = config;
const { apiBaseUrl } = SPOTIFY_CONFIG;

export async function requestToAPI({
  accessToken,
  data,
  endpoint,
  method,
  queryParams,
}) {
  try {
    const url = `${apiBaseUrl}/${endpoint}/${queryParams}`;

    const requestData = await axios({
      method,
      url,
      data,
      headers: AXIOS_CONFIG(accessToken).headers,
    });

    const response = apiResponse({
      data: requestData.data,
      error: null,
      status: requestData.status,
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
