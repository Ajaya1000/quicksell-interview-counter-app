import { COUNT_ACTIONS } from '../constants';

export const setCount = (value) => ({
  type: COUNT_ACTIONS.SET,
  payload: {
    value,
  },
});
