import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewItemAction,
  deleteItemQuantityAction,
  resetCartAction,
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
  cartTotalValue: number
  addNewItemOnCart: (item: CartItem) => void
  updateItemQuantityOnCart: (id: string, quantity: number) => void
  removeItemOnCart: (id: string) => void
  resetCart: () => void
}

export const CartContext = createContext({} as CartContextProviderData)
const localStorageKey = '@coffee-delivery:cart-item-1.0.0'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      itens: [],
      deliveryTax: 3.5,
      cartNumberItem: 0,
      totalValue: 0,
    },
    () => {
      const storedStateasJSON = localStorage.getItem(localStorageKey)

      if (storedStateasJSON) {
        return JSON.parse(storedStateasJSON)
      } else {
        return { itens: [], deliveryTax: 3.5, cartNumberItem: 0, totalValue: 0 }
      }
    },
  )

  function addNewItemOnCart(item: CartItem) {
    dispatch(addNewItemAction(item))
  }

  function updateItemQuantityOnCart(id: string, quantity: number) {
    dispatch(updateItemQuantityAction(id, quantity))
  }

  function removeItemOnCart(id: string) {
    dispatch(deleteItemQuantityAction(id))
  }

  function resetCart() {
    dispatch(resetCartAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(localStorageKey, stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cartTotalValue: cartState.totalValue,
        itens: cartState.itens,
        deliveryTax: cartState.deliveryTax,
        cartNumberItem: cartState.cartNumberItem,
        addNewItemOnCart,
        updateItemQuantityOnCart,
        removeItemOnCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
