const endpoints = {
  allCountries: 'all',
  searchByName: (searchQuery?: string) => `name/${searchQuery}`,
  getCountryPhotos: (searchQuery?: string) => `search/photos?page=1&query=${searchQuery}`,
};

export default endpoints;
