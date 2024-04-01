import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Link to='/' className='logo'>
        travelr
      </Link>
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
