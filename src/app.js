import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/configureStore";
import AppRoutes from "./routes/AppRoutes";

import "./styles/main.scss";
import { addBooks } from "./actions/books.action";

store.dispatch(
  addBooks({
    title: "The art of war",
    author: "Sun Tzu",
    date: 123,
    pageContent: "ancient book of the art of war",
  })
);

const connectedComponents = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);

ReactDOM.render(connectedComponents, document.getElementById("app"));
