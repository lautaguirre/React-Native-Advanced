import axios from 'axios';
import { Location } from 'expo';
import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_JOB,
  REJECT_JOB,
  CLEAR_LIKED_JOBS,
} from './types';

const JOB_ROOT_URL = 'https://authenticjobs.com/api/?';
const JOB_QUERY_PARAMS = {
  api_key:'bd30dde2e8c818a9792851aef058eeae',
  method: 'aj.jobs.search',
  perpage: '15',
  format: 'json',
};

const buildJobsUrl = zip => {
  const query = qs.stringify(JOB_QUERY_PARAMS);

  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let zip = await Location.reverseGeocodeAsync(region);

    const url = buildJobsUrl(zip);

    let { data } = await axios.get(url);

    // const filteredData = data.listings.listing.filter(item => item.company.location && item.company.location.lat);

    dispatch({ type: FETCH_JOBS, payload: data.listings.listing });

    callback();
  } catch (e) {
    console.error(e);
  }
};

export const rejectJob = (payload) => {
  return {
    type: REJECT_JOB,
    payload
  };
};

export const likeJob = (payload) => {
  return {
    type: LIKE_JOB,
    payload
  };
};

export const clearLikedJobs = () => {
  return {
    type: CLEAR_LIKED_JOBS
  }
};