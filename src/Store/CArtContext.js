import React from 'react'

const CArtContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart:() => {}
})
export default CArtContext;