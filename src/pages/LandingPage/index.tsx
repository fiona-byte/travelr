import Search from '../Search';
import './style.css';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='landing-page__container'>
        <h1 className='landing-page__heading'>Lorem ipsum dolor set amet</h1>
        <p className='landing-page__sub'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut amet nam perferendis quos doloremque
          architecto possimus itaque nisi nihil!
        </p>
        <Search />
      </div>
    </div>
  );
};

export default LandingPage;
