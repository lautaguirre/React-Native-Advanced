import { FETCH_JOBS } from '../actions/types';

const INITIAL_STATE = {
  results: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, result: action.payload.listings.listing };
    default:
      return state;
  }
}