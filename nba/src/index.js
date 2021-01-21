import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//import redux things
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

//import thunk
import thunk from "redux-thunk";

//import reducer
import { nbaReducer } from "./reducer/reducer";

const store = createStore(nbaReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
