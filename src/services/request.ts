import axios from 'axios';
import { COUNTRY_API_URL, PHOTO_API_URL, countryToken, accessKey } from './variables';

const countryAxiosInstance = axios.create({
  baseURL: COUNTRY_API_URL,
  headers: {
    Authorization: `Bearer ${countryToken}`,
  },
});

const photoAxiosInstance = axios.create({
  baseURL: PHOTO_API_URL,
  headers: {
    Authorization: `Client-ID ${accessKey}`,
    Accept: 'v1',
  },
});

export default { countryAxiosInstance, photoAxiosInstance };
