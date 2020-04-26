import styled from 'styled-components';
import {Container, Col, Row, Button} from 'react-bootstrap';

const AddButton = styled(Button)`
  background-color: red;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 2px;
`

const ProductWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;


export { AddButton, ProductWrapper };