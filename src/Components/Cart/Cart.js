import React, { useContext, useState } from 'react'
import Modal from './Modal'
import CArtContext from '../../Store/CArtContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const cartCtx = useContext(CArtContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = id => {
    cartCtx.removeItem({ ...id, id: id });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://mealicious-app-default-rtdb.firebaseio.com/Orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  }

  const cartItems = <ul className='cartItems'>
    {cartCtx.items.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />))}
  </ul>

  const cartModalData = (
    <>
      {!isCheckout && <Modal onClose={props.onClose} >
        {cartItems}
        <div className='cart-modal-data'>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className='cart-btn-groups'>
          <button type='button' onClick={props.onClose} className='close-btn modal-btn' >Close</button>
          {hasItems && <button type='submit' onClick={orderHandler} className='order-btn modal-btn' >Order</button>}
        </div>
      </Modal>}

      {isCheckout &&
        <Modal >
          <h1>Thank you for shopping with us</h1>
          <Checkout onConfirm={submitOrderHandler} onClose={props.onClose} />
        </Modal>}
    </>
  );

  const submittingContent = <h2>Data Under Procss...</h2>
  const submittingSuccessContent = (
    <>
      <h2>Order Submitted Successfully...</h2>
      <div>
        <iframe src="https://gifer.com/embed/XD4x" width='480px' height='360px' frameBorder="0" allowFullScreen></iframe>
      </div>
    </>
  );

  return (
    <>
      {!isSubmitting && !didSubmit && cartModalData}
      {isSubmitting && submittingContent}
      {!isSubmitting && didSubmit && submittingSuccessContent}
    </>
  )
}
