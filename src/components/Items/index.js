import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';

import PropTypes from 'prop-types';

import {
  ProductWrapper,
 } from './styled'

const Items = ({products, onAdd, onRemove, quantity}) => {

  return(
    products.map(item => {
      return (
        <ProductWrapper key={item.id}>
        <div>
          <h2>{item.name}</h2>
          <span>{`Price: $ ${item.price}`}</span>
        </div>
        <div>{`Qt: ${quantity}`}</div>
        <div>
          <Button 
            variant="primary"
            onClick={() => onAdd(item)}>Add</Button>
          <Button 
            variant="secondary"
            onClick={() => onRemove(item)}>Remove</Button>
        </div>
      </ProductWrapper>
      )
      })
  );
};

Items.prototype = {
  products: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default Items;