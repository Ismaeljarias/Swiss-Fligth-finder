// CONSTANT
const initialState = {
  adults: 1,
  children: 0,
};

const CHANGE_COUNT = "CHANGE_COUNT";
const ADD_ADULT = "ADD_ADULT";
const REMOVE_ADULT = "REMOVE_ADULT";

// REDUCER
export default function flightReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return {
        adults:
          action.payload <= 1
            ? (state.adults = 1)
            : action.payload >= 40
            ? (state.adults = 40)
            : action.payload,
      };
    case ADD_ADULT:
      return {
        adults: state.adults >= 40 ? (state.adults = 40) : state.adults + 1,
      };
    case REMOVE_ADULT:
      return {
        adults: state.adults <= 1 ? (state.adults = 1) : state.adults - 1,
      };

    default:
      return state;
  }
}

// ACTIONS
export const changeCount = (count) => (dispatch) => {
  dispatch({
    type: CHANGE_COUNT,
    payload: count,
  });
};

export const addPassenger = () => (dispatch) => {
  dispatch({
    type: ADD_ADULT,
  });
};

export const removePassenger = () => (dispatch) => {
  dispatch({
    type: REMOVE_ADULT,
  });
};
