import styles from '../styles/Cart.module.css';
import SingleCard from './SingleCard';
import { useState, useRef, useEffect } from 'react';

const Cart = ({
  productsInCart,
  removeFromCart,
  addToCart,
  checkPromo,
  promo,
}) => {
  const [isPromo, setIsPromo] = useState('');
  const inp = useRef();

  let count = {};
  let total =
    productsInCart.length > 0
      ? productsInCart.map((el) => el.price).reduce((a, b) => a + b)
      : '';

  productsInCart.map((el) =>
    count[el.name] ? (count[el.name] += 1) : (count[el.name] = 1)
  );
  let unique = new Set(productsInCart);

  if (promo) {
    total = total - total * (promo / 100);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    checkPromo(isPromo);
  }

  function checkPromocode() {}

  useEffect(() => {
    if (!promo && inp.current !== undefined) {
      inp.current.classList.add(`${styles.negativePromo}`);
      inp.current.classList.remove(`${styles.promoInput}`);
    }
    if (promo && inp.current !== undefined) {
      inp.current.classList.remove(`${styles.negativePromo}`);
      inp.current.classList.add(`${styles.promoInput}`);
    }
  }, [promo, inp]);

  return (
    <div className={styles.mainContainer}>
      {productsInCart.length > 0 && (
        <>
          <div className={styles.leftContainer}>
            {Array.from(unique).map((el, i) => (
              <SingleCard
                good={el}
                key={i}
                inCart={true}
                count={count[el.name]}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
              />
            ))}
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.totalPrice}>
              <h2>Purchase</h2>
              <ul className={styles.ul}>
                {Array.from(unique).map((el, i) => (
                  <li className={styles.li} key={i}>
                    {el.name}:{' '}
                    <span style={{ color: 'green', fontSize: '20px' }}>
                      {count[el.name]}
                    </span>
                  </li>
                ))}
              </ul>
              <div className={styles.promocode}>
                <form onSubmit={handleFormSubmit} className={styles.form}>
                  <input
                    type="text"
                    placeholder="Promocode"
                    onChange={(e) => setIsPromo(e.target.value)}
                    className={styles.promoInput}
                    ref={inp}
                  />
                  <button
                    type="submit"
                    className={styles.promoBtn}
                    onClick={checkPromocode}
                  >
                    Use
                  </button>
                </form>
              </div>
              <div className={styles.total}>
                Total price: &nbsp;
                <span style={{ color: 'green' }}>{total} CHF</span>
              </div>
            </div>
          </div>
        </>
      )}
      {!productsInCart.length && (
        <div className={styles.emptyCart}>
          <h1>Add something to the cart</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
