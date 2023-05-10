import React, { useState, useRef, useContext } from 'react'
import Card from '../UI/Card'
// import MealForm from './MealForm'
// import CArtContext from '../../Store/CArtContext'
import MealItem from './MealItem'

const dummy_meals = [
    {
        id: 1,
        name: "Chicken Tikka Masala",
        description: 'Finest food ever',
        price: 22.551,
    },
    {
        id: 2,
        name: "Burger Masala",
        description: 'Finest food ever',
        price: 20.1522,
    },
    {
        id: 3,
        name: "Sushi",
        description: 'Finest food ever',
        price: 32.557,
    },
    {
        id: 4,
        name: "Maggie Masala",
        description: 'Finest food ever',
        price: 15.5534,
    },
]
export default function Meal(props) {
    // const [amountIsValid, setAmountIsValid] = useState(false);

    // const amountInputRef = useRef();

    // const cartctx = useContext(CArtContext);
    // const addToCart = (amount) => {
    //     cartctx.addItem({
    //         id: props.id,
    //         name: props.name,
    //         amount: amount,
    //         price: props.price
    //     })
    // };
 
    // const submitHandler = event => {
    //     event.preventDefault();
    //     const enteredAmount = amountInputRef.current.value;
    //     const enteredAmountNumber = +enteredAmount;
    //     if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
    //         setAmountIsValid(false);
    //         return;
    //     };
    //     addToCart(enteredAmountNumber);
    // };

    const mealList = dummy_meals.map(meal => {
        return (<MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id} />)
    })
    return (
        <React.Fragment>
            <Card className='meal-card'>
                <section>
                    <p>Find some delicious food here..</p>
                    <p>Find some delicious food here..</p>
                    <p>Find some delicious food here..</p>
                    <p>Find some delicious food here..</p>
                </section>
            </Card>
            <Card className='add-meal-card'>
                <section>
                    <ul>
                        {/* {dummy_meals.map((meal) => {
                            return (
                                <Card className='meals-added'> */}
                                    {/* <li key={meal.id} className='dy-meals'>
                                        <div>
                                            <b>{meal.name}</b><br />
                                            <i>{meal.description}</i>
                                            <p className='pricing'>${meal.price.toFixed(2)}</p>
                                        </div>
                                        <MealForm onSubmit={submitHandler} valid={amountIsValid} ref={amountInputRef} />
                                    </li> */}
                                    {/* <MealItem    /> */}
                                {/* </Card>
                            )
                        }
                        )} */}
                        {mealList}
                    </ul>
                </section>
            </Card>

        </React.Fragment>
    )
}
