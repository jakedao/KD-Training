import React from 'react';
import {Provider} from 'react-redux';

import GlobalStyle from './GlobalStyle'

import { BottomBar, Input, Output} from './components';
import {ItemList, Form} from './containers/';

import store from './models/configureStore'

const App = () => {
  return(
    <React.Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <Output />
      </Provider>
    </React.Fragment>
  );
};

export default App;