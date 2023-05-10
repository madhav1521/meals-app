import React, {useReducer} from 'react'
import CArtContext from './CArtContext';

const defaultCartState ={
    items:[],
    totalAmount:0,
};
const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
 return defaultCartState;
}

export default function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {
        dispatchCartAction({type:'ADD', item:item});
    };
    const removeItemHandler = id => {
        dispatchCartAction({type:'Remove', id:id});
    };
    const clearItemHandler = () => {};
    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount   ,
        addItem:addItemHandler ,
        removeItem: removeItemHandler,
        clearCart:clearItemHandler
    }
  return (
    <CArtContext.Provider value={cartContext}>
      {props.children}
    </CArtContext.Provider>
  )
}
