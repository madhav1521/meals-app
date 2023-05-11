import React from 'react'

export default function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`
  return (
    <div>
      <li className='cartItem-li'>
        <div className='cartItem-summary'>
          <h4>{props.name}</h4>
          <div className='cartItem-btn'>
            <button className='items-btn minus' onClick={props.onRemove} >-</button>
            <button className='items-btn plus' onClick={props.onAdd} >+</button>
          </div>
        </div>
        <div className='cartItem-dataItems'>
          <span className='cartItem-amount' >x {props.amount}</span>
          <span className='cartItem-price' >{price}</span>
        </div>
      </li>
    </div>
  )
}
