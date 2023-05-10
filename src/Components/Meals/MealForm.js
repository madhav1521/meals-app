import React ,{ useRef, useState } from 'react'
import Input from '../UI/Input'

export default function MealForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(false);
  
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().length === 0  || enteredAmountNumber<1 || enteredAmountNumber>5 ){
      setAmountIsValid(false);
      return;
    };
    props.onAddToCart (enteredAmountNumber);
  };

  return (
    <React.Fragment>
      <form className='meal-form' onSubmit={submitHandler}>
        <Input ref={amountInputRef} label='Amount: ' input={{
            type:'number',
            id:'amount',
            min:1,
            max:5,
            step:1,
            defaultValue:1,
        }} />
        <button className='cart-btn' type='button' >+ Add</button>
        {!amountIsValid && <p>please enter valid amount (1-5).</p>}
      </form>
    </React.Fragment>
  )
}
 