import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Link to='/' className='logo'>
          travelr
        </Link>
      </div>
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
