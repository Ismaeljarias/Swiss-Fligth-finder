// CONSTANT
const initialState = {
  adults: 0,
};

const ADD_ADULT = "ADD_ADULT";

// REDUCER
export default function flightReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ADULT:
      return { adult: state.adult + 1 };

    default:
      return state;
  }
}

// ACTIONS
export const addPassenger = () => (dispatch) => {
  dispatch({
    type: ADD_ADULT,
  });
};
