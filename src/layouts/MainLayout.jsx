import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const MainLayout = ({ productsInCart }) => {
  return (
    <>
      <Menu productsInCart={productsInCart} />
      <Outlet />
    </>
  );
};

export default MainLayout;
