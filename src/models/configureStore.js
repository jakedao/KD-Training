import { combineReducers } from 'redux'
import { createStore } from 'redux';
import {cartItemReducer} from './Item/reducer'

const rootReducer = combineReducers({
  cartItemReducer,
});

const store = createStore(rootReducer);

export default store;
