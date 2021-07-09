import axios from 'axios';

const OMDB_API_URL = process.env.VUE_APP_OMDB_API_URL;
const OMDB_API_KEY = process.env.VUE_APP_OMDB_API_KEY;
const TMDB_API_URL = process.env.VUE_APP_TMDB_API_URL;
const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY;

export const searchByNameOMDB = async (name) => {
  try {
    let resp = await axios.get(
      `${OMDB_API_URL}s=${name}&apikey=${OMDB_API_KEY}`
    );
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

export const searchByNameTMDB = async (name) => {
  try {
    let resp = await axios.get(
      `${TMDB_API_URL}/search/multi?query=${name}&api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false&append_to_response=external_ids`
    );
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

export const getDataFromTMDBbyIMDBID = async (imdbID) => {
  try {
    let resp = await axios.get(
      `${TMDB_API_URL}/find/${imdbID}?api_key=${TMDB_API_KEY}&language=pt-BR&external_source=imdb_id`
    );
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

export const getDataFromOMDB = async (imdbID) => {
  try {
    let resp = await axios.get(
      `${OMDB_API_URL}i=${imdbID}&apikey=${OMDB_API_KEY}`
    );
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

export const getDataFromTMDBByID = async (id, type) => {
  try {
    let resp = await axios.get(
      `${TMDB_API_URL}/${type}/${id}?api_key=${TMDB_API_KEY}&language=pt-BR&append_to_response=external_ids`
    );
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};
