import React, { useContext } from 'react'
import cartIcon from '../../Assets/Images/cart-ic.svg'
import CArtContext from '../../Store/CArtContext'

export default function CartButton(props) {
    const cartctx = useContext(CArtContext);
   
    const noOfCartItems = cartctx.items.reduce((curNumber, item) => curNumber + item.amount, 0) ;

    return (
        <React.Fragment>
            <button className={props.className} onClick={props.onClick}>
                <span><img src={cartIcon} alt='cart-icon' ></img></span>
                {props.title}
                <span>{noOfCartItems}</span>
            </button>
        </React.Fragment>
    )
}
