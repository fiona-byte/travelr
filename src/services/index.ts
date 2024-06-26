import endpoints from './endpoints';
import request from './request';

const { countryAxiosInstance, photoAxiosInstance, weatherAxiosInstance } = request;
const appServices = {
  async allCountries() {
    return countryAxiosInstance.get(endpoints.allCountries).then(async ({ data }) => data);
  },
  async searchCountry(query: string) {
    return countryAxiosInstance.get(endpoints.searchByName(query)).then(async ({ data }) => data);
  },
  async getPhoto(query: string) {
    return photoAxiosInstance.get(endpoints.getCountryPhotos(query)).then(async ({ data }) => data);
  },
  async getWeatherTemperature(query: string) {
    return weatherAxiosInstance.get(endpoints.getCountryWeather(query)).then(async ({ data }) => data);
  },
};

export default appServices;
