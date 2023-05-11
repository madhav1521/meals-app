import React, { useContext } from 'react'
import Modal from './Modal'
import CArtContext from '../../Store/CArtContext';
import CartItem from './CartItem';

export default function Cart(props) {
  const cartCtx = useContext(CArtContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  
  const cartItemAddHandler = item => {
    cartCtx.addItem({...item ,amount:1});
};
const cartItemRemoveHandler = id => {
    cartCtx.removeItem({ ...id, id: id });
};

  const cartItems = <ul className='cartItems'>
    {cartCtx.items.map((item) => (<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}  onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} />))}
  </ul>

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className='cart-modal-data'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='cart-btn-groups'>
        <button type='button' onClick={props.onClose} className='close-btn modal-btn' >Close</button>
        {hasItems && <button type='submit' className='order-btn modal-btn' >Order</button>}
      </div>
    </Modal>
  )
}
