import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 1000 * 16, // 16 seconds
});

export { api };
