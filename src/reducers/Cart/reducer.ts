import { useEffect } from 'react'
import produce from 'immer'
import { ActionTypes } from './actions'
export interface CartItem {
  id: string
  name: string
  quantity: number
  img: string
  price: number
}

interface CartState {
  itens: CartItem[]
  cartNumberItem: number
  deliveryTax: number
  totalValue: number
}

export function cartReducer(state: CartState, action: any): CartState {
  function getTotalValueProducts(itens: CartItem[]): any {
    return itens.reduce(
      (sumValue, value) => {
        return {
          quantity: sumValue.quantity + value.quantity,
          totalValue: sumValue.totalValue + value.quantity * value.price,
        }
      },
      { quantity: 0, totalValue: 0 },
    )
  }

  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEMCART: {
      return produce(state, (draft) => {
        const itemIndex = state.itens.findIndex(
          (item) => action.payload.newItem.id === item.id,
        )
        if (itemIndex < 0) {
          draft.itens.push(action.payload.newItem)
        } else {
          draft.itens[itemIndex].quantity += action.payload.newItem.quantity
        }
        const { quantity, totalValue } = getTotalValueProducts(draft.itens)
        draft.totalValue = totalValue
        draft.cartNumberItem = quantity
      })
    }
    case ActionTypes.UPDATE_ITEM_QUANTITY_CART:
      return produce(state, (draft) => {
        const indexProduct = draft.itens.findIndex(
          (item) => item.id === action.payload.id,
        )
        if (indexProduct < 0) return

        if (action.payload.quantity <= 0) {
          draft.itens.splice(indexProduct, 1)
        } else {
          draft.itens[indexProduct].quantity = action.payload.quantity
        }
        const { quantity, totalValue } = getTotalValueProducts(draft.itens)
        draft.totalValue = totalValue
        draft.cartNumberItem = quantity
      })
    case ActionTypes.DELETE_ITEM_CART:
      return produce(state, (draft) => {
        const indexProduct = draft.itens.findIndex(
          (item) => item.id === action.payload.id,
        )
        if (indexProduct >= 0) draft.itens.splice(indexProduct, 1)
        const { quantity, totalValue } = getTotalValueProducts(draft.itens)
        draft.totalValue = totalValue
        draft.cartNumberItem = quantity
      })
  }

  return state
}
