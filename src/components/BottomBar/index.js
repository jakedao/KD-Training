import React from 'react';
import { Button } from 'react-bootstrap';
import {
  Wrapper,
  OrderWrapper,
  ItemName,
  ItemPrice,
  PayButton 
} from './styled';

const BottomBar = ({productName, prudctPrice}) => {
  return(
    <Wrapper>
      <OrderWrapper>
        <ItemName>{productName}</ItemName>
        <ItemPrice>{prudctPrice}</ItemPrice>
        <PayButton variant="secondary" size="lg" >
          Pay
        </PayButton>
      </OrderWrapper>
    </Wrapper>
  );
}

export default BottomBar;