import { CountriesResponse } from '../types';

export const getCountryNames = (countries: CountriesResponse) => {
  const countryDetails = [];

  for (const countryCode in countries ?? {}) {
    const country = countries[countryCode];
    countryDetails.push({
      name: country?.name,
      capital: country?.capital,
      flag: country?.flag?.small,
    });
  }

  return countryDetails;
};

/* export const getCountryNames = (countries: CountriesResponse) => {
  const countryData = Object.keys(countries ?? {}).map((countryCode) => countries[countryCode]?.name);
}; */
