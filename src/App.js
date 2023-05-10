import './App.css';
import Header from './Components/Layout/Header';
import Meal from './Components/Meals/Meal';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';


function App() {
  const [modalShown,setModalShown] = useState(false);
  const cartHideHandler = () => {
    setModalShown(false);
  };
  const cartShownHandler = () => {
    setModalShown(true);
  };
  return (
    <CartProvider >
      {modalShown && <Cart onClose={cartHideHandler} /> }
      <Header onClick={cartShownHandler} />
      <Meal />
    </CartProvider>
  );
}

export default App;
