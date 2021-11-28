import axios from 'axios';
import { URL, endPoint } from '../constants';

export const fetchCounter = async () => {
  try {
    const res = await axios.get(URL.get);
    if (res.status !== 200) throw new Error('Connection failed');
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const putCounter = async (value) => {
  try {
    const res = await axios.put(URL.put, {
      amati: value,
    });
    if (res.status !== 200) throw new Error('Connection failed');

    return res.data;
  } catch (e) {
    throw e;
  }
};
