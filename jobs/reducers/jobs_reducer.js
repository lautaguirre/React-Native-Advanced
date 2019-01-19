import _ from 'lodash';

import {
  FETCH_JOBS,
  REJECT_JOB,
  LIKE_JOB,
} from '../actions/types';

const INITIAL_STATE = {
  result: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, result: action.payload };
    case LIKE_JOB:
      return { ...state, result: _.filter(state.result, item => item.id !== action.payload.id) };
    case REJECT_JOB:
      return { ...state, result: _.filter(state.result, item => item.id !== action.payload.id) };
    default:
      return state;
  }
};
