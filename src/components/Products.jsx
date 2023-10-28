import styles from '../styles/Products.module.css';
import goods from '../data/goods';
import SingleCard from './SingleCard';

const Products = ({ onChange }) => {
  return (
    <div className={styles.mainContainer}>
      {goods.map((el) => (
        <SingleCard good={el} key={el.id} onChange={onChange} />
      ))}
    </div>
  );
};

export default Products;
