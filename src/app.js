import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppRoutes from "./routes/AppRoutes";
import { store, persistor } from "./store/configureStore";
import Loader from "./components/organisms/Loader";

import "./styles/main.scss";

console.log(store.getState());

const connectedComponents = (
  <Provider store={store}>
    <PersistGate loading={<Loader overide={true} />} persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);

ReactDOM.render(connectedComponents, document.getElementById("app"));
