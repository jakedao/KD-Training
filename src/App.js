import React, {createRef} from "react";
import { Provider } from "react-redux";

import GlobalStyle from "./GlobalStyle";

import { BottomBar, Input, Output } from "./components";
import { ItemList, Form, Dogs } from "./containers/";
import UsingRef from './components/Dog/temp'
import withClass from './hoc/withClass'

import store from "./models/configureStore";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  shouldComponentUpdate() {
    console.log('App.js should component')
    return true;
  }



  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <GlobalStyle />
        </Provider>
      </React.Fragment>
    );
  }
}

export default withClass(App);
