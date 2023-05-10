import React, { useContext } from 'react'
import cartIcon from '../../Assets/Images/cart-ic.svg'
import CArtContext from '../../Store/CArtContext'

export default function CartButton(props) {
    const cartctx = useContext(CArtContext);
    // const noOfCartItems = cartctx.items.reduce((curNumber,item) => {
    //     return curNumber + item.amount;
    // },0);
    console.log(cartctx)
    const noOfCartItems = cartctx.items && cartctx.items.reduce((curNumber, item) => curNumber + item.amount, 0) || 0;

    // let noOfCartItems = 0;
    // if (cartctx.items.length > 0) {
    //     for (const item of cartctx.items) {
    //         noOfCartItems += item.amount;
    //     }
    // }

    // if (cartctx && Array.isArray(cartctx.items)) {
    //     for (const item of cartctx.items) {
    //         noOfCartItems += item.amount;
    //     }
    // } 
    // else {
    //     return <div>Loading...</div>; 
    // }

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
