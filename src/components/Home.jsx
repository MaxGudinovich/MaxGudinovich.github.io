import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  function toProducts() {
    navigate('/products');
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.h1}>
          <span style={{ color: 'rgb(215, 151, 23)' }}>AUTUM</span> PROMO
        </h1>
        <button className={styles.toShopBtn} onClick={toProducts}>
          Shopping
        </button>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.promo}>
          <img src="shoes2.jpg" alt="promo" className={styles.imgPromo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
