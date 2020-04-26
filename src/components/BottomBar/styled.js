import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  border-top: 1px solid grey;
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const ItemName = styled.div`
  padding: 10px`
;

const ItemPrice = styled.div`
  padding: 10px
`;

const PayButton = styled(Button)`
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 5px 20px;
`
export {
  Wrapper,
  OrderWrapper,
  ItemName,
  ItemPrice,
  PayButton,
};