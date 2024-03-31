import { CountriesDetailsProps } from '../types';

export const mapObject = (data: CountriesDetailsProps) => {
  return data[Object.keys(data)[0]];
};
