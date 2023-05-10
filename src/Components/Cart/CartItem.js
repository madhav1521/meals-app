import React from 'react'

export default function CartItem(props) {
    const price = `$${props.price.toFixed(2)}`
  return (
    <div>
      <li className='cartItem-li'>
        <div>
            <h2>{props.name}</h2>
            <div className='cartItem-summary'>
                <span className='cartItem-price' >{price}</span>
                <span className='cartItem-amount' >x {props.amount}</span>
            </div>
            <div>
                <button onClick={props.onRemove} >-</button>
                <button onClick={props.onAdd} >+</button>
            </div>
        </div>
      </li>
    </div>
  )
}
