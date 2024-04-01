import './search.css';

const Search = () => {
  return (
    <div className='search'>
      <div className='search__container'>
        <form action='' className='search__form'>
          <div className='form__control'>
            <input type='text' className='search__input' placeholder='Current location' />
          </div>
          <div className='form__control'>
            <input type='text' className='search__input' placeholder='Destination' />
          </div>
          <button className='btn search__btn'>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
