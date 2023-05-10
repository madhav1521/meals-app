import React from 'react'
import cartIcon from '../../Assets/Images/cart-ic.svg'

export default function CartButton(props) {
    return (
        <React.Fragment>
            <button className={props.className} onClick={props.onClick}>
                <span><img src={cartIcon} alt='cart-icon' ></img></span>
                {props.title}
                <span>3</span>
            </button>
        </React.Fragment>
    )
}
