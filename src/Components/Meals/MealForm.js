import React, { useRef, useState } from 'react'
import Input from '../UI/Input'

export default function MealForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 15) {
      setAmountIsValid(false);
      return;
    };
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <React.Fragment>
      <form className='meal-form' onSubmit={submitHandler}>
        <Input ref={amountInputRef} label='Amount: ' input={{
          type: 'number',
          id: 'amount',
          min: 1,
          max: 15,
          step: 1,
          defaultValue: 1,
        }} />
        <button className='cart-btn' type='submit' >+ Add</button>
        {!amountIsValid ? <p>Sorry! We have a limit upto 15 items at a time.</p> : null}
      </form>
    </React.Fragment>
  )
}
