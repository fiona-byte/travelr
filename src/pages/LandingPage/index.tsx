import Search from '../../components/Search';
import { ToastContainer } from 'react-toastify';
import './style.css';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      {/* <Toaster show={isError} message={"Location and destination can't be the same"} type='error' /> */}
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
