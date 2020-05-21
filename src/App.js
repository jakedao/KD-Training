import React from 'react';
import {Provider} from 'react-redux';

import GlobalStyle from './GlobalStyle'

import { BottomBar, Input, Output} from './components';
import {ItemList, Form} from './containers/';

import store from './models/configureStore'
import Styling from './components/PlayWithStying';

const App = () => {
  return(
    <React.Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <Styling />
      </Provider>
    </React.Fragment>
  );
};

export default App;