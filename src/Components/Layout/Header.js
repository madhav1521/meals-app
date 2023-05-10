import React from 'react'
import mealimg from '../../Assets/Images/meal-img.jpg'
import CartButton from './CartButton'

export default function Header(props) {
  return (
    <React.Fragment>
      <header className='header'>
        <h2>Mealicious</h2>
        <CartButton className='cart-btn' title='Cart' onClick={props.onClick} />
      </header>
      <img src={mealimg} alt='meals-image' className='meal-img' />
    </React.Fragment>
  )
}
