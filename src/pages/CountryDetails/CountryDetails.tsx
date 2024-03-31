import { useState, useEffect } from 'react';
import { useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import appServices from '../../services';
import { mapObject } from '../../utils/mapObject';
import { CountryProps } from '../../types';
import './CountryDetails.css';

const CountryDetails = () => {
  const { country_name } = useParams();

  const [country, setCountry] = useState<CountryProps>();

  const results = useQueries({
    queries: [
      { queryKey: ['search'], retry: 0, queryFn: () => appServices.searchCountry(country_name as string) },
      { queryKey: ['getPhoto'], retry: 0, queryFn: () => appServices.getPhoto(country_name as string) },
    ],
  });

  useEffect(() => {
    if (results) setCountry(mapObject(results[0]?.data ?? {}));
  }, [results]);

  // TODO: Create an array of details to be shown here and map through it

  return (
    <div className='country-details'>
      {results[0]?.isLoading && results[1]?.isLoading ? (
        <h2 style={{ textAlign: 'center' }}>Loading</h2>
      ) : (
        <div className='country-details__wrapper'>
          <div className='country-details__header'>
            <h2 className='country-details__heading'>{country?.capital}</h2>
            <h5 className='country-details__sub'>{country?.name}</h5>
          </div>
          <div className='country-details__container'>
            <div className='country-details__box'>
              <div className='country-details__flex'>
                <h3 className='country-details__flex--heading'>Continent: &nbsp;</h3>
                <p className='country-details__flex--sub'>{country?.region}</p>
              </div>
              <div className='country-details__flex'>
                <h3 className='country-details__flex--heading'>Flight time: &nbsp;</h3>
                <p className='country-details__flex--sub'></p>
              </div>
              <div className='country-details__flex'>
                <h3 className='country-details__flex--heading'>Timezone: &nbsp;</h3>
                {/* <p className='country-details__flex--sub'>{country?.timezones[0]}</p> */}
              </div>
              <div className='country-details__flex'>
                <h3 className='country-details__flex--heading'>Weather: &nbsp;</h3>
                <p className='country-details__flex--sub'></p>
              </div>
              <div className='country-details__flex'>
                <h3 className='country-details__flex--heading'>Languages: &nbsp;</h3>
                <p className='country-details__flex--sub'></p>
              </div>
              <div className='country-details__flex'>
                <h3 className='country-details__flex--heading'>Population: &nbsp;</h3>
                <p className='country-details__flex--sub'>{country?.population?.toLocaleString()}</p>
              </div>
            </div>
            <div className='country-details__image--container'>
              {/* TODO: Add a skeleton loader */}
              <img
                src={results[1]?.data?.results[2]?.urls?.full}
                alt={results[1]?.data?.results[2]?.description}
                loading='lazy'
                className='country-details__image'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
