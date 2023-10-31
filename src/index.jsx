import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { CartProvider } from "./contexts/cart.content";
import { store } from "./store/store";

import { GlobalStyle } from "./global.styles";

const rootEl = document.getElementById("root");

const root = ReactDOM.createRoot(rootEl);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </Provider>
);
