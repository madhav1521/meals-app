import React from 'react'

const Input = React.forwardRef((props, ref) => {
  return (
    <form>
      <label className='input-item-label' htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} className='input-item-input' />
    </form>
  )
})
export default Input;