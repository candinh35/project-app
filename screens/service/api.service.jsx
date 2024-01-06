import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'http://169.254.32.201:8000/api/',
    headers: {
      'Content-Type': 'application/json',
    },
})

export default apiClient
  