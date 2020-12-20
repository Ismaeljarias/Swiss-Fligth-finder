import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/index";
import { Provider } from "react-redux";
import generateStore from "./store/store";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Header />

      <GlobalStyle />
    </Provider>
  );
}

export default App;
