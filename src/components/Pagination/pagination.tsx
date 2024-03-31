import { SetStateAction } from 'react';
import './pagnation.css';

type PaginationProps = {
  totalCountries: number;
  itemsPerPage: number;
  setPage: React.Dispatch<SetStateAction<number>>;
};

const Pagination = ({ totalCountries, itemsPerPage, setPage }: PaginationProps) => {
  return (
    <div className='pagination'>
      {/* <button className='btn pagination__btn prev__btn'>{'<<'}</button> */}
      {[...Array(totalCountries / itemsPerPage)].map((_, i) => (
        <button key={i} className='pagination__page' onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}
      {/* <button className='btn pagination__btn next__btn'>{'>>'}</button> */}
    </div>
  );
};

export default Pagination;
