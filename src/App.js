import React from "react";
import { Provider } from "react-redux";

import GlobalStyle from "./GlobalStyle";

import { BottomBar, Input, Output } from "./components";
import { ItemList, Form, Dogs } from "./containers/";
import withClass from './hoc/withClass'

import store from "./models/configureStore";

class App extends React.Component {

  shouldComponentUpdate() {
    console.log('App.js should component')
    return true;
  }
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <GlobalStyle />
          <Dogs />
        </Provider>
      </React.Fragment>
    );
  }
}

export default withClass(App);
