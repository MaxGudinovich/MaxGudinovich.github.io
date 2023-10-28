import styles from '../styles/SingleCard.module.css';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const SingleCard = ({
  good,
  onChange,
  inCart,
  count,
  removeFromCart,
  addToCart,
}) => {
  /* let id = good.id; */
  let name = good.name;
  let image = good.image;
  let price = good.price;

  return (
    <div className={styles.singleCard}>
      <div className={styles.image}>
        <img src={image} alt="sneaker" loading="lazy" />
      </div>
      <div className={styles.description}>
        <h3>{name}</h3>
        <h4>{price} CHF</h4>
        {!inCart && (
          <button
            className={styles.singleCardBtn}
            onClick={(e) => onChange(good)}
          >
            Add to cart
          </button>
        )}
        {inCart && (
          <div className={styles.addOrMinus}>
            <AiOutlineMinusCircle
              style={{ fontSize: '35px', color: 'red', cursor: 'pointer' }}
              onClick={(e) => removeFromCart(good)}
            />
            <p className={styles.count}>{count}</p>
            <AiOutlinePlusCircle
              style={{ fontSize: '35px', color: 'green', cursor: 'pointer' }}
              onClick={(e) => addToCart(good)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCard;
