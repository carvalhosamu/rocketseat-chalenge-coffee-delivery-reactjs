import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEMCART = 'ADD_NEW_ITEMCART',
  UPDATE_ITEM_QUANTITY_CART = 'UPDATE_ITEM_QUANTITY_CART',
  DELETE_ITEM_CART = 'DELETE_ITEM_CART',
}

export function addNewItemAction(newItem: CartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEMCART,
    payload: {
      newItem,
    },
  }
}

export function updateItemQuantityAction(id: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_ITEM_QUANTITY_CART,
    payload: {
      id,
      quantity,
    },
  }
}

export function deleteItemQuantityAction(id: string) {
  return {
    type: ActionTypes.DELETE_ITEM_CART,
    payload: {
      id,
    },
  }
}
