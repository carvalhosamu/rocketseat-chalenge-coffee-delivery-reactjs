import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEMCART = 'ADD_NEW_CYCLE',
  REMOVE_ITEM_QUANTITY_CART = 'INTERRUPT_CURRENT_CYCLE',
  DELETE_ITEM_CART = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewItemAction(newItem: CartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEMCART,
    payload: {
      newItem,
    },
  }
}
