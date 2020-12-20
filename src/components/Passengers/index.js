import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addPassenger,
  changeCount,
  removePassenger,
} from "../../store/flightDuck";

import { PassengerContainer, MainBox, InnerBoxContainer } from "../lib";

const Passengers = ({ register }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { adults, children } = useSelector((state) => state.flightReducer);

  console.log(adults);

  return (
    <PassengerContainer>
      <MainBox>
        <div className="passengerQ" onClick={() => setOpen(!open)}>
          <span className="group_quantity">
            {adults} Adult, 0 Children, 0 Infants
          </span>
          <span className="passenger">1 Passenger</span>
        </div>
        <React.Fragment>
          <InnerBoxContainer
            style={open ? { visibility: "visible" } : { visibility: "hidden" }}>
            <div className="quantityContainer">
              <div className="textbox">
                <span className="title">Adults</span>
                <small className="subtile">12+ years</small>
              </div>
              <div className="inputBox">
                <button
                  type="button"
                  onClick={() => dispatch(removePassenger())}>
                  -
                </button>
                <input
                  name="adults"
                  max="40"
                  min="1"
                  step="1"
                  type="number"
                  ref={register}
                  value={adults}
                  onChange={(e) => dispatch(changeCount(e.target.value))}
                />
                <button type="button" onClick={() => dispatch(addPassenger())}>
                  +
                </button>
              </div>
            </div>
            <div className="quantityContainer">
              <div className="textbox">
                <span className="title">Children</span>
                <small className="subtile">2-11 years</small>
              </div>
              <div className="inputBox">
                <button type="button">-</button>
                <input
                  name="children"
                  max="40"
                  min="0"
                  step="1"
                  type="number"
                  ref={register}
                  defaultValue={children}
                />

                <button type="button">+</button>
              </div>
            </div>
            <div className="closeButton" onClick={() => setOpen(!open)}>
              Close
            </div>
          </InnerBoxContainer>
        </React.Fragment>
      </MainBox>
    </PassengerContainer>
  );
};

export default Passengers;
