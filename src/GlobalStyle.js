import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    width: 100%;
  };

  .wrapper { 
    display: block;
    text-align: center;
    align-items: center;
    border: 1px solid gray;
    width: 400px;
    margin: 10px;
    padding: 10px;
    background: gray;
  }

  .red {
    color: red;
  }

  .bold {
    font-weight: bold;
  }

`;

export default GlobalStyle;