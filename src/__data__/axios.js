import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'api/books',
  timeout: 2000
})

export default axiosInstance
