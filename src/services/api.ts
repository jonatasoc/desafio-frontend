import axios from 'axios';

const api = axios.create({
  baseURL: 'https://weather-ydn-yql.media.yahoo.com',
  headers: { 'X-Yahoo-App-Id': 'your-app-id' },
});

export default api;
