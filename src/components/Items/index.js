import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';

import {
  AddButton,
  ProductWrapper,
 } from './styled'

const Item = () => {
  return(
    <Container>
      <Row>
        <Col>
          <ProductWrapper>
            <div>PRODUCT 1</div>
            <AddButton>Add</AddButton>
          </ProductWrapper>
        </Col>
        <Col>
          <ProductWrapper>
            <div>PRODUCT 2</div>
            <AddButton>Add</AddButton>
          </ProductWrapper>
        </Col>
      </Row>
    </Container>
  );

  
};

export default Item;