import { createContext, ReactNode, useReducer, useState } from 'react'
import {
  addNewItemAction,
  updateItemQuantityAction,
} from '../reducers/Cart/actions'
import { CartItem, cartReducer } from '../reducers/Cart/reducer'

export interface CartContextProviderProps {
  children: ReactNode
}

export interface CartContextProviderData {
  itens: CartItem[]
  deliveryTax: number
  cartNumberItem: number
  addNewItemOnCart: (item: CartItem) => void
  updateItemQuantityOnCart: (id: string, quantity: number) => void
}

export const CartContext = createContext({} as CartContextProviderData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    itens: [],
    deliveryTax: 3.5,
    cartNumberItem: 0,
  })

  function addNewItemOnCart(item: CartItem) {
    dispatch(addNewItemAction(item))
  }

  function updateItemQuantityOnCart(id: string, quantity: number) {
    dispatch(updateItemQuantityAction(id, quantity))
  }

  return (
    <CartContext.Provider
      value={{
        itens: cartState.itens,
        deliveryTax: cartState.deliveryTax,
        cartNumberItem: cartState.cartNumberItem,
        addNewItemOnCart,
        updateItemQuantityOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
