import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'api/books',
  timeout: 5000
})

export default axiosInstance
