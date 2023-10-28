import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Products from './components/Products';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import Footer from './components/Footer';
import promocode from './data/promocode';

import './App.css';

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [promo, setPromo] = useState();

  function checkPromo(obj) {
    setPromo(promocode[obj]);
  }

  function addToCart(obj) {
    setProductsInCart([...productsInCart, obj]);
  }

  function removeFromCart(obj) {
    let removedElement = productsInCart.lastIndexOf(obj);
    setProductsInCart(productsInCart.filter((_, i) => i !== removedElement));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout productsInCart={productsInCart} />}
          >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route
              path="products"
              element={<Products onChange={addToCart} />}
            />
            <Route path="contacts" element={<Contacts />} />
            <Route
              path="cart"
              element={
                <Cart
                  productsInCart={productsInCart}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  checkPromo={checkPromo}
                  promo={promo}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
