import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <h1 className='logo'>travelr</h1>
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
