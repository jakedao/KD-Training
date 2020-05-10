import React from 'react';
import {Items} from '../../components'
import products from '../../mocks/product'
import useCartItem from '../../hooks/useCartItem';

const ItemList = () => {

  const {addProduct, removeProduct, cart} = useCartItem();

  return(
    <Items 
      products={products} 
      onAdd={addProduct}
      onRemove={removeProduct}
      quantity={cart.quantity}
    />
  );
};  

export default ItemList;