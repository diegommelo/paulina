import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

export const searchByName = async (name) => {
  try {
    let resp = await axios.get(`${API_URL}t=${name}&apikey=${API_KEY}`);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};
