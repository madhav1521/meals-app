import React, {useReducer} from 'react'
import CArtContext from './CArtContext';

const defaultCartState ={
    items:[],
    totalAmount:0,
};
const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        
        const existingCartItem = state.items[existingCartItemIndex];
        
        let updatedItems;
        
        if(existingCartItem) {
            
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
      
        if (!existingCartItem) {
          return state;
        }
      
        let updatedItems;
        let updatedTotalAmount;
      
        if (existingCartItem.amount === 1) {
          updatedItems = state.items.filter((item) => item.id !== action.id);
          updatedTotalAmount = state.totalAmount - existingCartItem.price;
        } else {
          const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
          updatedTotalAmount = state.totalAmount - existingCartItem.price;
        }
      
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      

    if(action.type === 'CLEAR') {
        return defaultCartState;
    }

 return defaultCartState;
}

export default function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {
        dispatchCartAction({type:'ADD', item:item});
    };
    const removeItemHandler = id => {
        dispatchCartAction({type:'REMOVE', id});
    };
    const clearItemHandler = () => {
        dispatchCartAction({type:'CLEAR'});
    };
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
