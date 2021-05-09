import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/configureStore";
import AppRoutes from "./routes/AppRoutes";

import "./styles/main.scss";

const connectedComponents = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);

ReactDOM.render(connectedComponents, document.getElementById("app"));
