import { NavLink, useNavigate } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import styles from '../styles/Menu.module.css';

const Menu = ({ productsInCart }) => {
  const navigate = useNavigate();

  function toHome() {
    navigate('/home');
  }
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLogo}>
        <h1 className={styles.h1Logo} onClick={toHome}>
          <span style={{ color: 'red' }}>THE</span> Shop
        </h1>
      </div>
      <div className={styles.nav}>
        <NavLink to="home" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="products" className={styles.navLink}>
          Products
        </NavLink>
        <NavLink to="contacts" className={styles.navLink}>
          Contacts
        </NavLink>
        <NavLink to="cart" className={styles.navLinkCart}>
          <div className={styles.cartIcon}>
            <BsCart />
          </div>
          {productsInCart.length > 0 && (
            <div className={styles.cartCount}>{productsInCart.length}</div>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Menu;
