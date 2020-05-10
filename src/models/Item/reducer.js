import {
  ADD_ITEM, 
  ADD_ITEM_FAIL, 
  ADD_ITEM_SUCCESS, 
  REMOVE_ITEM, 
  REMOVE_ITEM_FAIL, 
  REMOVE_ITEM_SUCCESS } from '../../constant';
import produce from 'immer';

const initState = {
  items: [],
  isLoading: true,
  quantity: 0,
  message: '',
}

export const cartItemReducer = produce((draft=initState, action) => {
  switch(action.type){

    case ADD_ITEM:
      console.log('Added reducer')
      draft.items.push(action.payload);
      draft.quantity +=1;
      return draft;

    // case ADD_ITEM_SUCCESS:
    //   console.log('Added reducer')
    //   draft.items.push(action.payload);
    //   draft.isLoading = false;
    //   draft.quantity = draft.items.filter(item => item.id === action.payload.id) +1;
    //   return draft;

    // case ADD_ITEM_FAIL:
    //   console.log('Added fail')
    //   draft.message = 'Adding item failed'
    //   return draft;

    case REMOVE_ITEM:
      console.log('Removed reducer')
      draft.items.filter(item => item.id !== action.payload.id)
      draft.quantity -= 1;
      return draft;

    // case REMOVE_ITEM_SUCCESS:
    //   console.log('Removed reducer')
    //   draft.items.filter(item => item.id !== action.payload.id)
    //   draft.isLoading = false;
    //   draft.quantity = draft.items.filter(item => item.id === action.payload.id) -1;
    //   return draft;

    // case REMOVE_ITEM_FAIL:
    //   console.log('Removed failed')
    //   draft.message = 'Removing item failed'
    //   return draft;
    
    default: 
      return draft;
  }
});