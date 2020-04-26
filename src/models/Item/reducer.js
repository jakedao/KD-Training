import { ADD_ITEM } from './constant';
import produce from 'immer';

const initState = {
  cartItem: [],
  hasItem: false,
}

export const AddItemReducer = (initState, action) => produce(initState, draft => {
  switch(action.type){
    case ADD_ITEM:
      draft.cartItem.push(action.payload)
      draft.hasItem = true
      break;
    
    default: 
      return draft;
  }
});