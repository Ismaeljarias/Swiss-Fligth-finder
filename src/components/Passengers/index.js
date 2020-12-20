import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addPassenger,
  changeCount,
  removePassenger,
  addChild,
  changeChildrenCount,
  removeChild,
  removeInfant,
  addInfant,
  changeInfantCount,
} from "../../store/flightDuck";

import { PassengerContainer, MainBox, InnerBoxContainer } from "../lib";

const Passengers = ({ register }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { adults, children, infants } = useSelector(
    (state) => state.flightReducer
  );

  return (
    <PassengerContainer>
      <MainBox>
        <div className="passengerQ" onClick={() => setOpen(!open)}>
          <span className="group_quantity">
            {adults} Adult{adults > 1 ? "s" : null}, {children}{" "}
            {children === 1 ? "Child" : children > 1 ? "Children" : "Children"},{" "}
            {infants} Infant{infants > 1 ? "s" : null}
          </span>
          <span className="passenger">
            {adults + children + infants} Passenger
          </span>
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
                <button type="button" onClick={() => dispatch(removeChild())}>
                  -
                </button>
                <input
                  name="children"
                  max="40"
                  min="0"
                  step="1"
                  type="number"
                  ref={register}
                  value={children}
                  onChange={(e) =>
                    dispatch(changeChildrenCount(e.target.value))
                  }
                />

                <button type="button" onClick={() => dispatch(addChild())}>
                  +
                </button>
              </div>
            </div>
            <div className="quantityContainer">
              <div className="textbox">
                <span className="title">Infants</span>
                <small className="subtile">0-1 years</small>
              </div>
              <div className="inputBox">
                <button type="button" onClick={() => dispatch(removeInfant())}>
                  -
                </button>
                <input
                  name="infants"
                  max="40"
                  min="0"
                  step="1"
                  type="number"
                  ref={register}
                  value={infants}
                  onChange={(e) => dispatch(changeInfantCount(e.target.value))}
                />

                <button type="button" onClick={() => dispatch(addInfant())}>
                  +
                </button>
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
