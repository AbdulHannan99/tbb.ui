import axios from 'axios';

const httpService = axios.create({
  baseURL: 'https://localhost:7132/api', // Update this URL based on your backend server's URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpService;
