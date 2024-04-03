import axios from 'axios';
import { COUNTRY_API_URL, PHOTO_API_URL, COUNTRYTOKEN, accessKey, WEATHER_API_URL } from './variables';

const countryAxiosInstance = axios.create({
  baseURL: COUNTRY_API_URL,
  headers: {
    Authorization: `Bearer ${COUNTRYTOKEN}`,
  },
});

const photoAxiosInstance = axios.create({
  baseURL: PHOTO_API_URL,
  headers: {
    Authorization: `Client-ID ${accessKey}`,
    Accept: 'v1',
  },
});

const weatherAxiosInstance = axios.create({
  baseURL: WEATHER_API_URL,
});

export default { countryAxiosInstance, photoAxiosInstance, weatherAxiosInstance };
