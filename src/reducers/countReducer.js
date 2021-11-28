import { COUNT_ACTIONS } from '../constants';

export const countReducer = (state, action) => {
  switch (action.type) {
    case COUNT_ACTIONS.SET: {
      return { ...state, value: action.payload.value };
    }
    default: {
      return state;
    }
  }
};
