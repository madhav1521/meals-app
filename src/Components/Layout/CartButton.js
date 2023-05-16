import React, { useContext } from 'react'
// import cartIcon from '../../Assets/Images/cart-ic.svg'
import CArtContext from '../../Store/CArtContext'
import Header from './Header';

export default function CartButton(props) {
    const cartctx = useContext(CArtContext);

    const noOfCartItems = cartctx.items.reduce((curNumber, item) => curNumber + item.amount, 0);

    return (
        <React.Fragment>
            <button disabled={props.disabled} type={props.type} className={props.className} onClick={props.onClick}>
                <span><img src={props.src} alt={props.alt} ></img></span>
                {props.title}
                <div className='cart-items-number' >
                    <span>{noOfCartItems}</span>
                </div>
            </button>
        </React.Fragment>
    )
}
