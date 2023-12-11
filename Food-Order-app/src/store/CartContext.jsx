import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return {...state, items: updatedItems}
  }

  if (action.type === "REMOVE_FROM_CART") {
    const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
    
    const currentItem = state.items[existingItemIndex]

    const updatedItems = [...state.items]

      if (currentItem.quantity === 1) {
        updatedItems.filter(item => item.id !== action.id)
      }else{
        const updatedItem = {
            ...currentItem,
            quantity: currentItem.quantity - 1
        }
        updatedItems[existingItemIndex] = updatedItem
      }

      return {...state, items: updatedItems}

  }
}

export function CartContextProvider({ children }) {
  const [cart , dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const contextValue = {
    items : cart.items,
    addItem,
    removeItem
  }

  function addItem(item) {
    dispatchCartAction({type:'ADD_TO_CART', item})
  }

  function removeItem(id) {
    dispatchCartAction({type:'REMOVE_FROM_CART', id})
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
