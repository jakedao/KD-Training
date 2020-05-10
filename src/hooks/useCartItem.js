import {useSelector, useDispatch} from 'react-redux'
import cartItemReducer from '../models/Item/reducer'
import {addItem, removeItem} from '../models/Item/actions'

const useCartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartItemReducer)

  const dispatchAddItem = (product) => {
    console.log(cart);
    dispatch(addItem(product));
  }

  const dispatchRemoveItem = (product) => {
    console.log(cart);
    if(cart.quantity !==0){
      return dispatch(removeItem(product));
    }
    return;
  }

  return {
    addProduct: (product) => dispatchAddItem(product),
    removeProduct: (product) => dispatchRemoveItem(product),
    cart,
  }
};

export default useCartItem;