import { combineReducers } from 'redux'
import { createStore } from 'redux';
import AddItemReducer from './Item/reducer'

const rootReducer = combineReducers({
  AddItemReducer,
});

const store = createStore(rootReducer);

export default store;
