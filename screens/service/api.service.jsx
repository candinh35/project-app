import axios from 'axios';
const ip = '192.168.240.1';
const apiClient = axios.create({
    baseURL: `http://${ip}:8000/api/`,
    headers: {
      'Content-Type': 'application/json',
    },
})

export default apiClient
  