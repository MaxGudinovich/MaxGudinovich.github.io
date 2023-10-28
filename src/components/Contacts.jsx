import { SiInstagram } from 'react-icons/si';
import styles from '../styles/Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.mainContainer}>
      <a
        href="https://www.instagram.com/reebok/"
        target="_blank"
        rel="noreferrer"
        style={{ color: 'black' }}
      >
        <SiInstagram className={styles.iconInst} />
      </a>

      <h2 style={{ marginTop: '100px' }}>TheShop@gmail.com</h2>
      <h3>+41 76 555-55-55</h3>
    </div>
  );
};

export default Contacts;
