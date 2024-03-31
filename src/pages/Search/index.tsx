import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCountryNames } from '../../utils/getCountryName';
import { useStorage } from '../../hooks/useStorage';
import { useQuery } from '@tanstack/react-query';
import { CardProps } from '../../types';
import appServices from '../../services';
import Card from '../../components/Card/card';
import Pagination from '../../components/Pagination/pagination';
import './styles.css';

const Search = () => {
  const storage = useStorage();

  const itemsPerPage = 25;
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

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

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const newCountries = countries?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='search'>
      <div className='search__container'>
        <div className='search__input--container'>
          <input
            type='search'
            name='search_country'
            id='search_country'
            className='search__input'
            placeholder='Search by country'
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value as string);
              setSearchParams({ q: e.target.value as string });
            }}
          />
        </div>
        <div className='card__wrapper'>
          {newCountries
            ?.filter?.((result: CardProps) => {
              if (result?.name?.toLowerCase().includes(searchQuery.toLowerCase())) {
                return result;
              }
              return <h2 style={{ textAlign: 'center' }}>No search results</h2>;
            })
            ?.map((country: CardProps, index: number) => (
              <Card country={country} key={index} />
            ))}
        </div>
        {countries?.length && (
          <Pagination itemsPerPage={itemsPerPage} totalCountries={countries?.length} setPage={setPage} />
        )}
      </div>
    </div>
  );
};

export default Search;
