import React from "react";

import { Provider } from "react-redux";
import generateStore from "./store/store";

import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/index";
import { FlightSearch } from "./components/FlightSearch";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Header />
      <FlightSearch />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
