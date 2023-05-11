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
    if (action.type === 'Remove') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        console.log(existingCartItemIndex)
        const existingCartItem = state.items[existingCartItemIndex];
        console.log(existingCartItem)
        if(!existingCartItem) {
            return state;
        }
        // const updatedTotalAmount = state.totalAmount - existingCartItem.price * existingCartItem.amount;
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        
        let updatedItems;
        
        if(updatedItems === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        }
        else{
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1};
            // updatedItems = state.items.map(item => item.id === action.id ? updatedItem : item);
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
            // console.log(updatedItem)
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
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
