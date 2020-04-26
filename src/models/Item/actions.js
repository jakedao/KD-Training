import { ADD_ITEM } from './constant'

export const AddItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}