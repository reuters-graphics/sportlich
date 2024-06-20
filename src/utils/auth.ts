import axios from 'axios';
import crypto from 'node:crypto';
import qs from 'qs';

/**
 * Performs an authorised get request
 * @param path Request path
 * @param outletAuth OPTA outlet auth
 * @param secretKey Opta outlet secret key
 * @returns Requested data
 */
export async function get(path: string, outletAuth: string, secretKey: string) {
  const timestamp = Date.now();
  const API_Root = 'https://api.performfeeds.com';
  const secret = outletAuth + timestamp + secretKey;
  const authN = crypto.createHash('sha512').update(secret).digest('hex');

  // Start token request
  const tokenOptions = {
    baseURL: API_Root,
    url: `/oauth/token/${outletAuth}?_rt=b&_fmt=json`,
    method: 'POST',
    data: qs.stringify({
      grant_type: 'client_credentials',
      scope: 'b2b-feeds-auth',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: `Basic ${authN}`,
      Timestamp: timestamp,
    },
  };
  const tokenResponse = await axios(tokenOptions);
  const token = tokenResponse.data.access_token;

  // Start main request
  const requestOptions = {
    baseURL: API_Root,
    url: path,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios(requestOptions);
    const data = response.data;
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(`${error.response?.status || 'UNKNOWWN'} GET ERROR`);
      } else {
        throw new Error('Unspecified axios error');
      }
    }
  }
}
