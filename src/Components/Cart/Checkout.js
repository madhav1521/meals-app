import React from 'react'
import useHook from './useHook';
import CartButton from '../Layout/CartButton';

export default function Checkout(props) {

    const {
        value: enterName,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        inputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useHook(value => value.trim().length < 3 || value.trim().length > 20 && value.trim() === '');

    const {
        value: enterEmail,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useHook(value => !value.includes('@'));

    const {
        value: enterNumber,
        isValid: numberIsValid,
        hasError: numberInputHasError,
        inputChangeHandler: numberChangeHandler,
        inputBlurHandler: numberBlurHandler,
        reset: resetNumberInput
    } = useHook(value => value.trim().length !== 10);
    const {
        value: enterAddress,
        isValid: addressIsValid,
        hasError: addressInputHasError,
        inputChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddressInput
    } = useHook(value => value.trim().length < 1 || value.trim().length > 10);

    const {
        value: enterCode,
        isValid: codeIsValid,
        hasError: codeInputHasError,
        inputChangeHandler: codeChangeHandler,
        inputBlurHandler: codeBlurHandler,
        reset: resetCodeInput
    } = useHook(value => value.trim().length !== 6);

    let totalForms = false;
    if (!nameIsValid && !emailIsValid && !numberIsValid && !codeIsValid && !addressIsValid) {
        totalForms = true;
    };

    const confirmHandler = e => {
        e.preventDefault();
        console.log('form submitted')
        //     if (!nameIsValid && emailIsValid && numberIsValid && codeIsValid && addressIsValid) {
        //         return;
        //     }
        // resetNameInput();
        // resetEmailInput();
        // resetNumberInput();
        // resetAddressInput();
        // resetCodeInput();

        // };
        if (!nameIsValid && emailIsValid && numberIsValid && codeIsValid && addressIsValid) {
            const formData = {
                name: enterName,
                email: enterEmail,
                number: enterNumber,
                address: enterAddress,
                code: enterCode
            };

            props.onConfirm = (formData);
            return;
        };
        resetNameInput();
        resetEmailInput();
        resetNumberInput();
        resetAddressInput();
        resetCodeInput();
    };

    const invalidInputName = nameInputHasError ? 'inputFields-control invalid' : 'inputFields-control';
    const invalidInputEmail = emailInputHasError ? 'inputFields-control invalid' : 'inputFields-control ';
    const invalidInputNumber = numberInputHasError ? 'inputFields-control invalid' : 'inputFields-control ';
    const invalidInputCode = codeInputHasError ? 'inputFields-control invalid' : 'inputFields-control ';
    const invalidInputAddress = addressInputHasError ? 'inputFields-control invalid' : 'inputFields-control ';

    return (
        <form onSubmit={confirmHandler}>
            <div className={invalidInputName} >
                <label htmlFor='name'>Enter Name* </label>
                <input value={enterName} className='input-field' onBlur={nameBlurHandler} onChange={nameChangeHandler} type='text' id='name' name='name' />
                {nameInputHasError && <p>It must have a valid name (between 3 and 20 and can't be empty)</p>}
            </div>

            <div className={invalidInputEmail} >
                <label htmlFor='email'>Enter Email* </label>
                <input value={enterEmail} className='input-field' onBlur={emailBlurHandler} onChange={emailChangeHandler} type='email' id='email' name='E-mail' />
                {emailInputHasError && <p>Please enter valid Email</p>}
            </div>

            <div className={invalidInputNumber} >
                <label htmlFor='number'>Enter your Mobile Number* </label>
                <input value={enterNumber} className='input-field' onBlur={numberBlurHandler} onChange={numberChangeHandler} type='number' id='number' name='number' />
                {numberInputHasError && <p>Please enter valid Mobile number </p>}
            </div>
            <div className={invalidInputAddress}>
                <label htmlFor='street' >Enter Address*</label>
                <input id='street' value={enterAddress} onBlur={addressBlurHandler} onChange={addressChangeHandler} name='address' type='textarea' />
                {addressInputHasError && <p>Please enter your address </p>}
            </div>
            <div className={invalidInputCode}>
                <label htmlFor='code' >Postal code* </label>
                <input id='code' name='postal' value={enterCode} onBlur={codeBlurHandler} onChange={codeChangeHandler} type='text' />
                {codeInputHasError && <p>Please enter valid Postal code</p>}
            </div>
            <button type='button' className='modal-btn close-btn' onClick={props.onClose} >Cancel</button>
            <CartButton disabled={!totalForms} type='submit' className='modal-btn order-btn' title='Confirm' />
        </form>
    )
}

