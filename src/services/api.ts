import axios from 'axios';

export const baseURL = 'https://gateway.marvel.com/v1/public';

const api = axios.create({
  baseURL: baseURL,
});

export default api;
