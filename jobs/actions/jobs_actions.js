import axios from 'axios';

import {
  FETCH_JOBS
} from './types';

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    const url = `https://jobs.github.com/positions.json?lat=${region.latitude}&long=${region.longitude}`;

    let { data } = await axios.get(url);

    dispatch({ type: FETCH_JOBS, payload: data });

    callback();
  } catch (e) {
    console.error(e);
  }
}
