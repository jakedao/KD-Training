import React from 'react';
import {Provider} from 'react-redux';

import GlobalStyle from './GlobalStyle'

import { BottomBar} from './components';
import {ItemList} from './containers/';

import store from './models/configureStore'

const App = () => {
  return(
    <React.Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <ItemList />
        <BottomBar />
      </Provider>
    </React.Fragment>
  );
};

export default App;