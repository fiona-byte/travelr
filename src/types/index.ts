export type CountriesResponse = {
  [key: string]: {
    name: string;
    capital: string;
    flag: { small: string };
  };
};

export type CardProps = {
  name: string;
  capital: string;
  flag: string;
};

export type CountryProps = {
  name: string;
  capital: string;
  region: string;
  timezones: Array<string>;
  population: number;
  flag: { medium: string };
};

export type CountriesDetailsProps = {
  [key: string]: CountryProps & {
    [key: string]: unknown;
  };
};
