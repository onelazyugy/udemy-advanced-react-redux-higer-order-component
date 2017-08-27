import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, browserHistory } from "react-router";

import requireAuth from './components/require_authentication';
import App from "./components/app";
import Resources from "./components/resources";
import Test from "./components/test";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Router path="/" component={App}>
        <Router path="/resources" component={requireAuth(Resources)} />
        <Router path="/test" component={Test} />
      </Router>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
