import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { addPassenger, removePassenger } from "../../store/flightDuck";

import Passengers from "./index";

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("<Passenger /> Tests", () => {
  beforeEach(() => cleanup());

  test("should render without errors", () => {
    const { getByTestId } = render(<Passengers />, { wrapper: Wrapper });

    const passengerComponent = getByTestId("passenger-container");
    expect(passengerComponent).toBeDefined();
  });

  test("adults input should start in 1 and decrement button disabled", () => {
    const { getByTestId } = render(<Passengers />, { wrapper: Wrapper });
    const adults_input = screen.getByLabelText("adults-input");
    const adults_decrement = screen.getByTestId("adults-decrement");

    expect(adults_input.value).toBe("1");
    expect(adults_decrement).toBeDisabled();
  });

  test("should addPassenger increment Adults Passengers", () => {
    const { getByTestId } = render(<Passengers />, { wrapper: Wrapper });
    const adults_input = screen.getByLabelText("adults-input");

    store.dispatch(addPassenger());

    expect(adults_input.value).toBe("2");
  });

  test("should removePassenger decrement Adults Passengers", () => {
    const { getByTestId } = render(<Passengers />, { wrapper: Wrapper });
    const adults_input = screen.getByLabelText("adults-input");

    store.dispatch(removePassenger());
    expect(adults_input.value).toBe("1");
  });
});
