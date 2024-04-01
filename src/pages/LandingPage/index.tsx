import Search from '../Search';
import './style.css';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='landing-page__container'>
        <h2 className='landing-page__heading'>Plan the perfect stress-free trip that fits you.</h2>
        <div className='landing-page__search--wrapper'>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
