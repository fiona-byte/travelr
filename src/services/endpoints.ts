import { WEATHER_API_KEY } from './variables';

const endpoints = {
  allCountries: 'all',
  searchByName: (searchQuery?: string) => `name/${searchQuery}`,
  getCountryPhotos: (searchQuery?: string) => `search/photos?page=1&query=${searchQuery}`,
  getCountryWeather: (searchQuery?: string) =>
    `data/2.5/weather?q=${searchQuery}&units=metric&appid=${WEATHER_API_KEY}`,
};

export default endpoints;
