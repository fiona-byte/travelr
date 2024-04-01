import { CountriesResponse } from '../types';

export const getCountryNames = (countries: CountriesResponse) => {
  return Object.keys(countries ?? {}).map((countryCode) => countries[countryCode]?.name);
};
