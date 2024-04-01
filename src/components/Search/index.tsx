import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCountryNames } from '../../utils/getCountryName';
import { Autocomplete } from '@mui/material';
import { useStorage } from '../../hooks/useStorage';
import { useQuery } from '@tanstack/react-query';
import appServices from '../../services';
import './search.css';

const Search = () => {
  const storage = useStorage();
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');

  const { data, refetch } = useQuery({
    retry: 0,
    queryKey: ['allCountries'],
    enabled: false,
    queryFn: () => appServices.allCountries(),
  });

  useEffect(
    () => {
      const countriesInStore = storage.get('countryNames');
      if (countriesInStore) {
        setCountries(JSON.parse(countriesInStore));
      } else {
        refetch();
        if (data) {
          const countryNames = getCountryNames(data);
          storage.set('countryNames', JSON.stringify(countryNames));
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  const query = useQuery({
    retry: 0,
    queryKey: ['searchCountry'],
    enabled: false,
    queryFn: () => appServices.searchCountry(destination),
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await query?.refetch();
    if (query?.isSuccess) navigate(`/details?from=${location}&to=${destination}`);
  };

  return (
    <div className='search'>
      <div className='search__container'>
        <form action='' className='search__form' onSubmit={handleSubmit}>
          <div className='form__control'>
            <Autocomplete
              id='location'
              options={countries?.sort()}
              value={location}
              getOptionLabel={(option) => option}
              noOptionsText='No location'
              onChange={(_, newValue) => {
                setLocation(newValue as string);
              }}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input {...params.inputProps} type='text' className='search__input' placeholder='Current location' />
                </div>
              )}
              renderOption={(props, option) => {
                return (
                  <li className='search-render-list' {...props}>
                    <h4 className='search-render-list__name'>{option}</h4>
                  </li>
                );
              }}
            />
          </div>
          <div className='form__control'>
            <Autocomplete
              id='destination'
              options={countries?.sort()}
              value={destination}
              getOptionLabel={(option) => option}
              noOptionsText='No destination'
              onChange={(_, newValue) => {
                setDestination(newValue as string);
              }}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input {...params.inputProps} type='text' className='search__input' placeholder='Destination' />
                </div>
              )}
              renderOption={(props, option) => {
                return (
                  <li className='search-render-list' {...props}>
                    <h4 className='search-render-list__name'>{option}</h4>
                  </li>
                );
              }}
            />
          </div>
          <button className='btn search__btn' disabled={!location || !destination}>
            {query?.isLoading ? 'Searching' : 'Search'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
