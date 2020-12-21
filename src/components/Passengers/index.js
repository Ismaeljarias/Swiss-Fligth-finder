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
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setOpen(false);
    }
  };

  const total_count = parseInt(adults) + parseInt(children) + parseInt(infants);

  return (
    <PassengerContainer data-testid="passenger-container">
      <MainBox>
        <div className="passengerQ" onClick={() => setOpen(!open)}>
          <span className="group_quantity">
            {adults} Adult{adults > 1 ? "s" : null}, {children}{" "}
            {children === 1 ? "Child" : children > 1 ? "Children" : "Children"},{" "}
            {infants} Infant{infants > 1 ? "s" : null}
          </span>
          <span className="passenger">{total_count} Passenger</span>
        </div>
        <React.Fragment>
          <InnerBoxContainer
            ref={wrapperRef}
            style={open ? { visibility: "visible" } : { visibility: "hidden" }}>
            <div className="quantityContainer">
              <div className="textbox">
                <span className="title">Adults</span>
                <small className="subtile">12+ years</small>
              </div>
              <div className="inputBox">
                <button
                  data-testid="adults-decrement"
                  disabled={adults === 1 ? true : false}
                  type="button"
                  onClick={() => dispatch(removePassenger())}>
                  -
                </button>
                <input
                  aria-label="adults-input"
                  name="adults"
                  maxLength="2"
                  max="40"
                  min="1"
                  step="1"
                  type="number"
                  ref={register}
                  value={adults}
                  onChange={(e) =>
                    e.target.value
                      ? dispatch(changeCount(e.target.value))
                      : false
                  }
                />

                <button
                  data-testid="adults-increment"
                  disabled={adults === 40 ? true : false}
                  type="button"
                  onClick={() => dispatch(addPassenger())}>
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
                <button
                  data-testid="children-decrement"
                  disabled={children === 0 ? true : false}
                  type="button"
                  onClick={() => dispatch(removeChild())}>
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
                    e.target.value
                      ? dispatch(changeChildrenCount(e.target.value))
                      : false
                  }
                />

                <button
                  data-testid="children-increment"
                  disabled={children === 39 ? true : false}
                  type="button"
                  onClick={() => dispatch(addChild())}>
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
                <button
                  data-testid="infants-decrement"
                  disabled={infants === 0 ? true : false}
                  type="button"
                  onClick={() => dispatch(removeInfant())}>
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
                  onChange={(e) =>
                    e.target.value
                      ? dispatch(changeInfantCount(e.target.value))
                      : false
                  }
                />

                <button
                  data-testid="infants-increment"
                  disabled={infants === 39 ? true : false}
                  type="button"
                  onClick={() => dispatch(addInfant())}>
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
