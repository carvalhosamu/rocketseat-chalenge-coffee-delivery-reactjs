import produce from 'immer'
import { ActionTypes } from './Actions'
export interface CartItem {
  id: string
  name: string
  quantity: number
  imageUrl: string
}

interface CartState {
  itens: CartItem[]
  cartNumberItem: number
  deliveryTax: number
}

export function cartReducer(state: CartState, action: any): CartState {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEMCART:
      return produce(state, (draft) => {
        draft.cartNumberItem += action.payload.newItem.quantity
        const itemIndex = state.itens.findIndex(
          (item) => action.payload.newItem.id === item.id,
        )
        if (itemIndex < 0) {
          draft.itens.push(action.payload.newItem)
        } else {
          draft.itens[itemIndex].quantity += action.payload.newItem.quantity
        }
      })
  }

  return state
}
