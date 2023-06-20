import React from 'react'
import mealimg from '../../Assets/Images/meal-img.jpg'
import CartButton from './CartButton'
import cartIcon from '../../Assets/Images/cart-ic.svg'

export default function Header(props) {
  return (
    <React.Fragment>
      <header className='header'>
        <h2>Mealicious</h2>
        <CartButton className='cart-btn' title='Cart' src={cartIcon} alt='cart-icon' onClick={props.onClick} />
      </header>
      <img src={mealimg} alt='meals-image' className='meal-img' />
    </React.Fragment>
  )
}
