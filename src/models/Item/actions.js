import {
  ADD_ITEM,
  ADD_ITEM_SUCCESS, 
  REMOVE_ITEM, 
  REMOVE_ITEM_SUCCESS,
} from '../../constant';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  }
};
