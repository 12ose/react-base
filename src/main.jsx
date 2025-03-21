import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" in React 18
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import { CookiesProvider } from "react-cookie";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render your app
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
);
