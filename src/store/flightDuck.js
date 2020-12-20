// CONSTANT
const initialState = {
  adults: 1,
  children: 0,
  infants: 0,
  total_count: 40,
};

const CHANGE_COUNT = "CHANGE_COUNT";
const ADD_ADULT = "ADD_ADULT";
const REMOVE_ADULT = "REMOVE_ADULT";

const ADD_CHILD = "ADD_CHILD";
const REMOVE_CHILD = "REMOVE_CHILD";
const CHANGE_CHILDREN_COUNT = "CHANGE_CHILDREN_COUNT";

const ADD_INFANT = "ADD_INFANT";
const REMOVE_INFANT = "REMOVE_INFANT";
const CHANGE_INFANT_COUNT = "CHANGE_INFANT_COUNT";

// REDUCER
export default function flightReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return {
        ...state,
        adults:
          action.payload <= 1
            ? (state.adults = 1)
            : action.payload > 40
            ? (state.adults = 40)
            : action.payload,
      };
    case CHANGE_CHILDREN_COUNT:
      return {
        ...state,
        children: action.payload > 39 ? (state.children = 39) : action.payload,
      };
    case CHANGE_INFANT_COUNT:
      return {
        ...state,
        infants: action.payload > 39 ? (state.infants = 39) : action.payload,
      };
    case ADD_ADULT:
      return {
        ...state,
        adults: state.adults >= 40 ? (state.adults = 40) : state.adults + 1,
      };

    case ADD_CHILD:
      return {
        ...state,
        children:
          state.children >= 40 ? (state.children = 40) : state.children + 1,
      };
    case ADD_INFANT:
      return {
        ...state,
        infants: state.infants >= 40 ? (state.infants = 40) : state.infants + 1,
      };
    case REMOVE_CHILD:
      return {
        ...state,
        children:
          state.children <= 0 ? (state.children = 0) : state.children - 1,
      };
    case REMOVE_ADULT:
      return {
        ...state,
        adults: state.adults <= 1 ? (state.adults = 1) : state.adults - 1,
      };
    case REMOVE_INFANT:
      return {
        ...state,
        infants: state.infants <= 0 ? (state.infants = 0) : state.infants - 1,
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
export const changeChildrenCount = (count) => (dispatch) => {
  dispatch({
    type: CHANGE_CHILDREN_COUNT,
    payload: count,
  });
};

export const changeInfantCount = (count) => (dispatch) => {
  dispatch({
    type: CHANGE_INFANT_COUNT,
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

export const addChild = () => (dispatch) => {
  dispatch({
    type: ADD_CHILD,
  });
};
export const removeChild = () => (dispatch) => {
  dispatch({
    type: REMOVE_CHILD,
  });
};

export const addInfant = () => (dispatch) => {
  dispatch({
    type: ADD_INFANT,
  });
};
export const removeInfant = () => (dispatch) => {
  dispatch({
    type: REMOVE_INFANT,
  });
};
