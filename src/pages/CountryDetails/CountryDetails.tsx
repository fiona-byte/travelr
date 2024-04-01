import { useState, useEffect } from 'react';
import { useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import appServices from '../../services';
// import { obj } from '../../object';
import { mapObject } from '../../utils/mapObject';
import { CountryProps } from '../../types';
import Clock from '../../assets/svgs/clock';
import Thermometer from '../../assets/svgs/thermometer';
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
    // setCountry(mapObject(obj ?? {}));
    if (results) setCountry(mapObject(results[0]?.data ?? {}));
  }, [results]);

  // TODO: Create an array of details to be shown here and map through it

  return (
    <div className='country-details'>
      {results[0]?.isLoading || results[1]?.isLoading ? (
        <h2 style={{ textAlign: 'center' }}>Loading</h2>
      ) : (
        <div
          className='country-details__container'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${results[1]?.data?.results[3]?.urls?.full})`,
          }}
        >
          <div className='country-details__wrapper'>
            <div className='country-details__box'>
              <div className='country-details__details'>
                <div className='country-details__details--box'>
                  <Clock className='country-details__details--icon' />
                  <p className='country-details__timezone'>{country?.timezones[0]}</p>
                </div>
                <div className='country-details__details--box'>
                  <Thermometer className='country-details__details--icon' />
                  <p className='country-details__temperature'>28°C</p>
                </div>
              </div>
              <div className='country-details__text--container'>
                <h2 className='country-details__capital'>{country?.capital},</h2>
                <h4 className='country-details__name'>{country?.name}</h4>
              </div>
            </div>
            <div className='country-details__info'>
              <div className='country-details__info--box'>
                <h6 className='country-details__info--heading'>Continent:</h6>
                <p className='country-details__info--text'>{country?.region}</p>
              </div>
              <div className='country-details__info--box'>
                <h6 className='country-details__info--heading'>Flight time:</h6>
                <p className='country-details__info--text'>6 hrs</p>
              </div>
              <div className='country-details__info--box'>
                <h6 className='country-details__info--heading'>Population:</h6>
                <p className='country-details__info--text'>{country?.population?.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
