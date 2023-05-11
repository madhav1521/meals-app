import React ,{useContext} from 'react'
import CArtContext from '../../Store/CArtContext'
import MealForm from './MealForm'
import Card from '../UI/Card';

export default function MealItem(props) {

    const cartCtx = useContext(CArtContext);
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };
    return (
        <div>
        <Card className='meals-added'> 
            <li  className='dy-meals'>
                <div>
                    <b>{props.name}</b><br />
                    <i>{props.description}</i>
                    <p className='pricing'>${props.price.toFixed(2)}</p>
                </div>
                <MealForm  onAddToCart={addToCartHandler} />
            </li>
            </Card>
        </div>
    )
}
