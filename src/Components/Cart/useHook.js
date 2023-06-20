import React , {useState} from 'react'

export default function useHook(validate) {
    const [enterInput, setEnterInput] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validate(enterInput);
    const hasError = isValid && isTouched;

    const inputChangeHandler = e => {
        setEnterInput(e.target.value);
    }
    const inputBlurHandler = e => {
        e.preventDefault();
        setIsTouched(true);
    }

    const reset = () => {
        setEnterInput('');
        setIsTouched(false);
    }

  return {
    value:enterInput,
    isValid:isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }
}

