import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./reducers/store";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}
  body {
    font-family: 'Montserrat';
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
